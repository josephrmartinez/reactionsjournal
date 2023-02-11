import FormWrapper from "./FormWrapper";

export default function PartnerReactionsForm({updateFields, partnerReactions }) {
  const reactionClicked = (e) => {
    updateFields({partnerReactions: partnerReactions.map((reaction) =>
        reaction.id === e.target.getAttribute("data-id")
          ? { ...reaction, selected: !reaction.selected }
          : reaction) })
  };

    return (
        <FormWrapper title="Their habitual reactions:">
        <div className="form-grid">
      {partnerReactions.map((reaction) => (
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


