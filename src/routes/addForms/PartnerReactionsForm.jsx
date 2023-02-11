import FormWrapper from "./FormWrapper";
import { useState } from "react";

export default function PartnerReactionsForm({updateFields, partnerReactions }) {
  const [reactions, setReactions] = useState([
    { id: "1", name: "giving advice", selected: false },
    { id: "2", name: "defensiveness", selected: false },
    { id: "3", name: "changing subject", selected: false },
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
  ]);

  const reactionClicked = (e) => {
    // max 6 selected
    if (!e.target.classList.contains("selected")) {
      const selectedCount = reactions.filter((reaction) => reaction.selected).length;
      if (selectedCount === 6) {
        return;
      }
    }

    setReactions(
      reactions.map((reaction) =>
        reaction.id === e.target.getAttribute("data-id")
          ? { ...reaction, selected: !reaction.selected }
          : reaction
      )
    );
      
      let selectedItems = reactions.filter(reaction => reaction.selected)
      let reactionsList = selectedItems.map(each => each.name)
      console.log(reactionsList)
      updateFields({ partnerReactions: reactionsList })
    //   HOW TO ADD TWO WAY DATA BINDINGS ON DIV TOGGLE ITEMS LIKE THIS?
      
  };

    return (
        <FormWrapper title="Their habitual reactions:">
        <div className="form-grid">
      {reactions.map((reaction) => (
        <div
          onClick={reactionClicked}
          data-id={reaction.id}
          key={reaction.id}
          className={`form-toggle-div${reaction.selected ? " selected" : ""}`}
        >
          {reaction.name}
        </div>
      ))}
        </div>
        </FormWrapper>
  );
}


