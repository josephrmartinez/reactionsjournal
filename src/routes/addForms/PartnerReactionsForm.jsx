import FormWrapper from "./FormWrapper"

export default function PartnerReactionsForm({ updateFields, partnerReactions }) {
    return (
        <FormWrapper title="their habitual reactions">
            <label>how they reacted:</label>
            <input
                autoFocus
                required
                type="text"
                value={partnerReactions}
                onChange={e => updateFields({ partnerReactions: e.target.value })}/>
        </FormWrapper> 
    )
}