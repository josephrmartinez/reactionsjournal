import FormWrapper from "./FormWrapper"

export default function NotesAndSubmitForm({ updateFields, notes }) {
    return (
        <FormWrapper title="Notes:">
            <div className="justify-self-start flex flex-col items-center">
            <textarea
                autoFocus 
                type="textArea"
                style={{ width: "90%", height: "100px" }}
                className="p-3"  
                placeholder="optional"    
                value={notes}
                    onChange={e => updateFields({ notes: e.target.value })} />
            </div>
        </FormWrapper> 
    )
}