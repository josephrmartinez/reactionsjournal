import FormWrapper from "./FormWrapper";

export default function UserResponsesForm({updateFields, userResponses }) {
  const responseClicked = (e) => {
      updateFields({userResponses: userResponses.map((response) =>
          response.id === e.target.getAttribute("data-id")
            ? { ...response, selected: !response.selected }
            : response) })
  };
  
    return (
        <FormWrapper title="My intentional responses:">
        <div className="form-grid">
      {userResponses.map((response) => (
        <div
          onClick={responseClicked}
          data-id={response.id}
          key={response.id}
          className={`form-toggle-div${response.selected ? " selected" : ""}`}
        >
          {response.name}
        </div>
      ))}
        </div>
        </FormWrapper>
  );
}