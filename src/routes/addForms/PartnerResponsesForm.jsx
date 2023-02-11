import FormWrapper from "./FormWrapper";
import { useState } from "react";

export default function PartnerResponsesForm({updateFields, partnerResponses }) {
  const [responses, setResponses] = useState([
    { id: "1", name: "empathy", selected: false },
    { id: "2", name: "quiet listening", selected: false },
    { id: "3", name: "reflecting feelings", selected: false },
    { id: "4", name: "being present", selected: false },
    { id: "5", name: "curiosity", selected: false },
    { id: "6", name: "speaking up", selected: false },
    { id: "7", name: "take responsibility", selected: false },
    { id: "8", name: "assume positive intent", selected: false }
  ]);

  const responseClicked = (e) => {
    // max 6 selected
    if (!e.target.classList.contains("selected")) {
      const selectedCount = responses.filter((response) => response.selected).length;
      if (selectedCount === 6) {
        return;
      }
    }

    setResponses(
      responses.map((response) =>
        response.id === e.target.getAttribute("data-id")
          ? { ...response, selected: !response.selected }
          : response
      )
    );
      
      let selectedItems = responses.filter(response => response.selected)
      let responsesList = selectedItems.map(each => each.name)
      updateFields({ partnerResponses: responsesList })
    //   HOW TO ADD TWO WAY DATA BINDINGS ON DIV TOGGLE ITEMS LIKE THIS?
      
  };

    return (
        <FormWrapper title="Their intentional responses:">
        <div className="form-grid">
      {responses.map((response) => (
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


