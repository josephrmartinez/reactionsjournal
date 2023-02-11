import FormWrapper from "./FormWrapper";

export default function PartnerResponsesForm({updateFields, partnerResponses }) {
  const responseClicked = (e) => {
      updateFields({partnerResponses: partnerResponses.map((response) =>
          response.id === e.target.getAttribute("data-id")
            ? { ...response, selected: !response.selected }
            : response) })
  };
  
    return (
        <FormWrapper title="Their intentional responses:">
        <div className="form-grid">
      {partnerResponses.map((response) => (
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