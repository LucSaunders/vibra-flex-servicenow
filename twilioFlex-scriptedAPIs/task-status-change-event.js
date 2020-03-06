(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
  response.setContentType("application/json");
  response.setStatus(200);
  var body = {};

  //parse worker, task, and eventType data out from Twilio data
  var requestBody = request.body.data;
  var workerEmail = requestBody.worker.email;
  var task = requestBody.task;
  var eventType = requestBody.eventType;

  switch (eventType) {
    case "accept_task":
      if (
        task.attributes.ticket_number &&
        task.attributes.ticket_number.toString().trim() != ""
      ) {
        //This case is when a reservation is accepted and the caller is asking about an existing ticket. In this use case we want to popup the existing ticket instead of creating a new one

        //lookup user from worker email address coming from Twilio
        var user_gr = new GlideRecord("sys_user");
        user_gr.get("email", workerEmail);

        //lookup ticket using ticket number coming from Twilio
        var inc_gr = new GlideRecord("incident");
        inc_gr.addQuery(
          "number",
          task.attributes.ticket_number.toString().trim()
        );
        inc_gr.query();

        if (inc_gr.next()) {
          inc_gr.x_8725_servicenow_twilio_integration_information =
            "twilio_assigned_to: " + user_gr.sys_id;
          inc_gr.update();
        }
      } else {
        //This case is when a reservation is accepted and the caller is wanting to report a new issue

        //lookup user from worker email address coming from Twilio
        var user_gr = new GlideRecord("sys_user");
        user_gr.get("email", workerEmail);

        //create new incident with the caller as the person making the phone call and the assigned to being the worker from Twilio
        var inc_gr = new GlideRecord("incident");
        inc_gr.initialize();
        inc_gr.assigned_to = user_gr.sys_id;
        inc_gr.contact_type = "twilio_flex";
        inc_gr.caller_id = task.attributes.user_sys_id.toString().trim();
        inc_gr.x_8725_servicenow_twilio_integration_information = task.sid
          .toString()
          .trim();
        inc_gr.insert();
      }
      break;
    case "complete_task":
      if (
        task.attributes.ticket_number &&
        task.attributes.ticket_number.toString().trim() != ""
      ) {
        //This case is when a reservation is completed and the caller was asking about an existing ticket.

        //lookup user from worker email address coming from Twilio
        var user_gr = new GlideRecord("sys_user");
        user_gr.get("email", workerEmail);

        //lookup ticket using ticket number coming from Twilio
        var inc_gr = new GlideRecord("incident");
        inc_gr.addQuery(
          "number",
          task.attributes.ticket_number.toString().trim()
        );
        inc_gr.query();

        if (inc_gr.next()) {
          inc_gr.x_8725_servicenow_twilio_integration_information =
            inc_gr.x_8725_servicenow_twilio_integration_information +
            ", call_completed";
          inc_gr.x_8725_servicenow_twilio_integration_information = inc_gr.x_8725_servicenow_twilio_integration_information.replace(
            ", twilio_assigned_to: " + user_gr.sys_id,
            ""
          );
          inc_gr.update();
        }
      } else {
        //This case is when a reservation is completed and the caller was wanting to report a new issue

        //lookup user from worker email address coming from Twilio
        var user_gr = new GlideRecord("sys_user");
        user_gr.get("email", workerEmail);

        //lookup ticket using ticket number coming from Twilio
        var inc_gr = new GlideRecord("incident");
        inc_gr.addQuery(
          "correlation_id",
          "CONTAINS",
          task.sid.toString().trim()
        );
        inc_gr.query();

        if (inc_gr.next()) {
          inc_gr.x_8725_servicenow_twilio_integration_information =
            inc_gr.x_8725_servicenow_twilio_integration_information +
            ", call_completed";
          inc_gr.x_8725_servicenow_twilio_integration_information = inc_gr.x_8725_servicenow_twilio_integration_information.replace(
            ", twilio_assigned_to: " + user_gr.sys_id,
            ""
          );
          inc_gr.update();
        }
      }
      break;
  }
  response.setBody(body);
})(request, response);
