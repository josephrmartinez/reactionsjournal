import { useEffect, useState } from 'react';
import FormWrapper from './FormWrapper.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function DateLocationWithForm({ conversationID, conversationDate, conversationLocation, conversationWith, updateFields }) {
    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(() => {
    updateFields({ conversationDate: startDate })
    }, [startDate])
    
return (
    <FormWrapper title="Add conversation:">
        <div className='flex flex-col h-full justify-around'>
            <div className='border-b-4 flex flex-row align-center w-full'>
            <label>conversation with:</label>
            <input
                autoFocus
                required
                type="text"
                style={{ width: "110px" }}
                className="pl-3 border-none outline-none font-bold text-green-800"
                value={conversationWith}
                onChange={e => updateFields({ conversationWith: e.target.value })} />
            </div>
            
            <div className='flex flex-row align-center w-full align-left'>
                <label className='pr-3'>date:</label>
                {/* <input type="date"  className="pl-5" value={startDate}></input> */}
                <DatePicker style={{ width: "90px"}} selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        
            <div className='border-b-4 flex flex-row align-center justify-start w-full'><label>location:</label>
                <input
                    required
                    type="text"
                    className="pl-3 border-none outline-none font-bold text-green-800"
                    value={conversationLocation}
                    onChange={e => updateFields({ conversationLocation: e.target.value })} />
            </div>
        </div>
    </FormWrapper>)
};