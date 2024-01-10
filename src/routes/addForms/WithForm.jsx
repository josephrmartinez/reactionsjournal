import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from 'nanoid';


export default function WithForm({ conversationID, conversationWith, updateFields }) {  
    
    
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full w-48 items-left justify-around'>
                <div className='border-b-2 border-emerald-700/60 flex flex-row align-center w-full'> 
                    <label className='text-lg font-semibold text-gray-700'>with:</label>
                        <input
                        autoFocus
                        required
                        type="text"
                        style={{ width: "160px" }}
                        className="pl-3 border-none outline-none text-left text-lg"
                        value={conversationWith}
                        onChange={e => updateFields({ conversationWith: e.target.value, conversationID: nanoid() })} />
                </div>
        </div>
    </FormWrapper>)
};