import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from 'nanoid';


export default function LocationForm({ conversationID, conversationLocation, updateFields }) {  
    
    
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full w-48 items-left justify-around'>
            <div className='border-b-2 border-emerald-700/60 flex flex-row align-center justify-start w-full'>
                <label className='text-lg font-semibold text-gray-700'>location:</label>
                <input
                    required
                    type="text"
                    className="pl-3 border-none outline-none text-left text-lg"
                    value={conversationLocation}
                    onChange={e => updateFields({ conversationLocation: e.target.value })} />
            </div>
        </div>
    </FormWrapper>)
};