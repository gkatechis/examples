# Demo app - Change the requester of a ticket to a user who may not already exist in your instance

This app demonstrates one use of ZAF's client.request method, where we create or update a user with the Create or Update User endpoint when a ticket update is submitted in the agent interface. Once the user is created or updated successfully, we set that user as the new requester on the ticket.

At the moment there are no input fields to add the user, so replace the values on lines 20-21 as needed.

## References

* [Zendesk apps framework ticket.save event](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-save-hook-events)
* [Zendesk apps framework client.request method](https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/#clientrequestoptions)
* [Zendesk API create or update user](https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-user)
* [JS Promises using async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await)