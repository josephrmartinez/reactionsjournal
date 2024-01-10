import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from 'nanoid';


export default function DateForm({ conversationID, conversationDate, updateFields }) {  
    
    
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full w-48 items-left justify-around'>
            

            <div className='border-b-2 border-emerald-700/60 flex flex-row align-center w-full'>
                <label className='text-lg font-semibold text-gray-700 pr-3'>date:</label>
                <DatePicker style={{ width: "90px" }} selected={conversationDate} onChange={(date) => updateFields({ conversationDate: date })} />
            </div>
        
        </div>
    </FormWrapper>)
};