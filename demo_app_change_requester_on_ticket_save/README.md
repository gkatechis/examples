# Demo app - Change the requester of a ticket to a user who may not already exist in your instance

This app demonstrates one use of ZAF's client.request method, where we create or update a user with the Create or Update User endpoint when a ticket update is submitted in the agent interface. Once the user is created or updated successfully, we set that user as the new requester on the ticket.

At the moment there are no input fields to add the user, so replace the values on lines 20-21 as needed.

## Getting started

Follow these steps to get a local copy up and running.

### Prerequisites

- Zendesk Command Line (ZCLI)

[Using Zendesk Command Line](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#installing-and-updating-zcli)

### Installation

1. Clone the repo

```
git clone https://github.com/example.git
```

2. Run the app.

```
zcli apps:server
```

[Testing your Zendesk app locally](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#testing-your-zendesk-app-locally)

<!-- Links to relevant resources such as help center articles or dev docs -->

## Additional Resources

- [Zendesk apps framework ticket.save event](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-save-hook-events)
- [Zendesk apps framework client.request method](https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/#clientrequestoptions)
- [Zendesk API create or update user](https://developer.zendesk.com/api-reference/ticketing/users/users/#create-or-update-user)
- [JS Promises using async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await)

<!-- Issue reporting with link to repo issues page -->

## Issues

You can [create an issue on Github](https://github.com/zendesk/example/issues/new),
reach out in our [Developer Community](https://support.zendesk.com/hc/en-us/community/topics),
or report the issue in the [Zendesk Developers Slack group](https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform).
