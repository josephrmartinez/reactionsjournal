import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function DateLocationWithForm({ conversationID, conversationDate, conversationLocation, conversationWith, updateFields }) {
    // const [startDate, setStartDate] = useState(new Date());
    
    // useEffect(() => {
    // updateFields({ conversationDate: startDate })
    // }, [startDate])
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full w-10/12 items-center justify-around'>
            <div className='border-b-4 border-amber-500 flex flex-row align-center w-full'>
                <label className='text-lg font-semibold text-gray-700'>conversation with:</label>
                <input
                    autoFocus
                    required
                    type="text"
                    style={{ width: "90px" }}
                    className="pl-3 border-none outline-none font-bold text-green-800 text-lg"
                    value={conversationWith}
                    onChange={e => updateFields({ conversationWith: e.target.value })} />
            </div>
            
            <div className='border-b-4 border-amber-500 flex flex-row align-center w-full'>
                <label className='text-lg font-semibold text-gray-700 pr-3'>date:</label>
                {/* <input type="date"  className="pl-5" value={startDate}></input> */}
                <DatePicker style={{ width: "90px" }} selected={conversationDate} onChange={(date) => updateFields({ conversationDate: date })} />
            </div>
        
            <div className='border-b-4 border-amber-500 flex flex-row align-center justify-start w-full'>
                <label className='text-lg font-semibold text-gray-700'>location:</label>
                <input
                    required
                    type="text"
                    className="pl-3 border-none outline-none font-bold text-green-800 text-lg"
                    value={conversationLocation}
                    onChange={e => updateFields({ conversationLocation: e.target.value })} />
            </div>
        </div>
    </FormWrapper>)
};