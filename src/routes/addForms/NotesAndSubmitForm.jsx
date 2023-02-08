import FormWrapper from "./FormWrapper"

export default function NotesAndSubmitForm({ updateFields, notes }) {
    return (
        <FormWrapper title="response">
            <label>notes:</label>
            <textarea
                autoFocus
                type="textArea"
                value={notes}
                onChange={e => updateFields({ notes: e.target.value })}/>
        </FormWrapper> 
    )
}