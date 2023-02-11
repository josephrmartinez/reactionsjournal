import FormWrapper from "./FormWrapper";

export default function UserReactionsForm({updateFields, userReactions }) {
  const reactionClicked = (e) => {
    updateFields({userReactions: userReactions.map((reaction) =>
        reaction.id === e.target.getAttribute("data-id")
          ? { ...reaction, selected: !reaction.selected }
          : reaction) })
  };

    return (
        <FormWrapper title="My habitual reactions:">
        <div className="form-grid">
      {userReactions.map((reaction) => (
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


