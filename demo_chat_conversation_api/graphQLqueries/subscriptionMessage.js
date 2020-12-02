const ChatMessage = require('./chatMessage')

class SubscriptionMessage extends ChatMessage {

  constructor(webSocket, messageMap) {

    super(webSocket, messageMap, 'message')

    this.graphQlMessage = 
      {
        id: this.id,
        type: "request",
        payload: {
          query: `subscription {
                    message {
                      node {
                        id
                        content
                        channel {
                          id
                          ... on VisitorChannel {
                            ip
                            city
                            country
                            user_agent
                            department {
                              id
                              name
                              status
                            }
                            visitor {
                              current_country
                              current_region
                              external_id
                              display_name
                              email
                              phone
                              current_tags
                              raw_id
                              status
                            }
                            logs {
                              edges {
                                node {
                                  ... on Message {
                                    id
                                    content
                                  }
                                }
                              }
                            }
                          }
                        }
                        from {
                          __typename
                          display_name
                        }
                        sender_name
                        timestamp
                      }
                    }
                  }`
        }
      }

  }

  messageSucceeded(data) {
    this.messageSubscriptionId = data.payload.data.subscription_id
    console.log(`[${this.name}] Successfully subscribed. Subscription ID: ${this.messageSubscriptionId}`)

    this.promiseResolve(this.messageSubscriptionId)
    this.messageMap.delete(this.id)
  }
}

module.exports = SubscriptionMessage
