import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from 'nanoid';


export default function DateLocationWithForm({ conversationID, conversationDate, conversationLocation, conversationWith, updateFields }) {  
    
    
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full max-w-[260px] items-left justify-around'>
            <div>
            
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

            <div className='border-b-2 border-emerald-700/60 flex flex-row align-center w-full'>
                <label className='text-lg font-semibold text-gray-700 pr-3'>date:</label>
                <DatePicker style={{ width: "90px" }} selected={conversationDate} onChange={(date) => updateFields({ conversationDate: date })} />
            </div>
        
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