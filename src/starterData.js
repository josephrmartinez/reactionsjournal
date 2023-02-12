import { nanoid } from "nanoid"

export let starterData = [
        {
    conversationID: nanoid(),
    conversationDate: new Date(),
    conversationLocation: "office",
    conversationWith: "brian",
    userReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: false },
    { id: "4", name: "diagnosing", selected: true },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: true },
    { id: "7", name: "taking it personally", selected: true },
    { id: "8", name: "shutting down", selected: true },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: true },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: false },
    { id: "14", name: "personal storytelling", selected: true }
  ],
    userResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: true },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    partnerReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: true },
    { id: "4", name: "diagnosing", selected: false },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: false },
    { id: "7", name: "taking it personally", selected: false },
    { id: "8", name: "shutting down", selected: false },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: false },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: false },
    { id: "14", name: "personal storytelling", selected: false }
  ],
    partnerResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: true },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    notes: "",
    entryExpanded: false
        },
        {
    conversationID: nanoid(),
    conversationDate: new Date(),
    conversationLocation: "home",
    conversationWith: "mary",
    userReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: true },
    { id: "4", name: "diagnosing", selected: false },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: false },
    { id: "7", name: "taking it personally", selected: false },
    { id: "8", name: "shutting down", selected: false },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: false },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: true },
    { id: "14", name: "personal storytelling", selected: false }
  ],
    userResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    partnerReactions: [
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: true },
    { id: "4", name: "diagnosing", selected: false },
    { id: "5", name: "dismissing feelings", selected: false },
    { id: "6", name: "sarcasm", selected: false },
    { id: "7", name: "taking it personally", selected: false },
    { id: "8", name: "shutting down", selected: false },
    { id: "9", name: "devil's advocate", selected: false },
    { id: "10", name: "intellectualizing", selected: false },
    { id: "11", name: "sympathy", selected: false },
    { id: "12", name: "one-upping", selected: false },
    { id: "13", name: "commiserating", selected: false },
    { id: "14", name: "personal storytelling", selected: false }
  ],
    partnerResponses: [
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ],
    notes: "",
    entryExpanded: false
    }
    ]