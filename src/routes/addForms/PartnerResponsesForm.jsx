import FormWrapper from "./FormWrapper";

export default function PartnerResponsesForm({updateFields, partnerResponses }) {
    return (
        <FormWrapper title="their intentional responses:">
            <label>how they responded:</label>
            <input
                autoFocus
                required
                type="text"
                value={partnerResponses}
                onChange={e => updateFields({ partnerResponses: e.target.value })}/>
        </FormWrapper> 
    )
}