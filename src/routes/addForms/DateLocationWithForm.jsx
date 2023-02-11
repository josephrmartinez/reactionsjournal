import { useState } from 'react';
import FormWrapper from './FormWrapper.jsx'

export default function DateLocationWithForm({ conversationID, conversationDate, conversationLocation, conversationWith, updateFields }) {
    const [date, setDate] = useState([
        { id: "1", name: "today", selected: true },
        { id: "2", name: "yesterday", selected: false }
    ])
    
    const dateClicked = (e) => {
    setDate(
      date.map((option) =>
        option.id === e.target.getAttribute("data-id")
          ? { ...option, selected: !option.selected }
          : { ...option, selected: !option.selected }
      )
    );
      
      let selectedDate = date.filter(option => option.selected)
      updateFields({ conversationDate: selectedDate.name })
    //   HOW TO ADD TWO WAY DATA BINDINGS ON DIV TOGGLE ITEMS LIKE THIS?
      
  };
    
    
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
                        className="pl-3"
                        value={conversationWith}
                        onChange={e => updateFields({ conversationWith: e.target.value })} />
                </div>

                <div className="flex flex-row justify-around">
                    {date.map((option) => (
                        <div
                            onClick={dateClicked}
                            data-id={option.id}
                            key={option.id}
                            className={`date-toggle-div${option.selected ? " selected" : ""}`}
                        >
                            {option.name}
                        </div>))}

                </div>
            
                <div className='border-b-4 flex flex-row align-center justify-start w-full'><label>location:</label>
                    <input
                        required
                        type="text"
                        className="pl-3"
                        value={conversationLocation}
                        onChange={e => updateFields({ conversationLocation: e.target.value })} /></div>
            </div>
            
            </FormWrapper>
        )
    }
