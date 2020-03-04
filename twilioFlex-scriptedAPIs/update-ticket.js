(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
  var body = {};
  response.setContentType("application/json");

  //set variables from Twilio
  var requestBody = request.body.data;
  var ticket_number = requestBody.ticketNumber;
  var comment = requestBody.comment;

  //lookup ticket and add comment
  var ticket_gr = new GlideRecord("incident");
  ticket_gr.get("number", ticket_number);

  ticket_gr.comments = comment;
  ticket_gr.state = 2;
  ticket_gr.update();

  response.setStatus(200);
  response.setBody(body);
})(request, response);
