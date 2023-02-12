import FormWrapper from "./FormWrapper"

export default function NotesAndSubmitForm({ updateFields, notes }) {
    return (
        <FormWrapper title="Notes:">
            <div className="justify-self-start flex flex-col w-10/12 items-center">
            <textarea
                autoFocus 
                type="textArea"
                style={{width:"100%", height: "100px" }}
                className="p-3"  
                placeholder="optional"    
                value={notes}
                    onChange={e => updateFields({ notes: e.target.value })} />
            </div>
        </FormWrapper> 
    )
}