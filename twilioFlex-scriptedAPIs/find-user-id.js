(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
  var body = {};
  response.setContentType("application/json");

  //read user-entered ID in from Twilio request
  var requestBody = request.body.data;
  var user_id = requestBody.ID_input;

  //find any users that have a phone number that matches the phone number from Twilio
  var user_gr = new GlideRecord("sys_user");
  user_gr.addActiveQuery();
  user_gr.addEncodedQuery("sys_id=" + sys_id);
  user_gr.query();

  //exclude match if there is more than one result as this is likely a shared phone nnumber
  if (user_gr.next() && user_gr.getRowCount() == 1) {
    //add user information into the response object
    body.name = user_gr.name;
    body.first_name = user_gr.first_name;
    body.sys_id = user_gr.sys_id;
    body.title = user_gr.title.getDisplayValue();
    body.department = user_gr.department.getDisplayValue();
    body.location = user_gr.location.getDisplayValue();
    body.sys_id = user_gr.sys_id.getDisplayValue();

    //lookup user tickets and add them to response body
    var tickets = [];
    var inc_gr = new GlideRecord("incident");
    inc_gr.addEncodedQuery("caller_id=" + user_gr.sys_id + "^active=true");
    inc_gr.query();
    body.num_tickets = inc_gr.getRowCount();
    while (inc_gr.next()) {
      var ticket = {};
      ticket.number = inc_gr.number.getDisplayValue();
      ticket.short_description = inc_gr.short_description.getDisplayValue();
      ticket.state = inc_gr.state.getDisplayValue();
      ticket.priority = inc_gr.priority.getDisplayValue();
      //only add comments when the ticket is on hold as the ticket may not have a comment otherwise
      if (ticket.state == "On Hold")
        ticket.last_comment = inc_gr.comments
          .getJournalEntry(1)
          .toString()
          .split("(Additional comments)")[1]
          .trim();
      tickets.push(ticket);
    }
    body.tickets = tickets;
    response.setStatus(200);
  } else {
    //unable to find user
    response.setStatus(404);
  }

  response.setBody(body);
})(request, response);
