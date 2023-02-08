import FormWrapper from "./FormWrapper"

export default function UserResponsesForm({updateFields, userResponses}) {
    return (
        <FormWrapper title="my intentional responses:">
            <label>how I responded:</label>
            <input
                autoFocus
                required
                type="text"
                value={userResponses}
                onChange={e => updateFields({ userResponses: e.target.value })}/>
        </FormWrapper> 
    )
}