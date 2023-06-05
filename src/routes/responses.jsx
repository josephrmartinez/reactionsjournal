import React from "react"
import { useState } from "react"

export default function Responses() {
   const [infoBox, setInfoBox] = useState({ isDisplayed: false, title: "", content: "" })


let intentionalResponses =
[
    {
        concept: "empathy",
        fulltitle: "empathetic listening",
        description: "Listener connects with the speaker's underlying feelings and needs."
    }, 
    {
        concept: "quiet listening",
        fulltitle: "quiet listening",
        description: "Listener holds space for the speaker to express themself fully."
    },
    {
        concept: "reflecting feelings",
        fulltitle: "reflecting feelings",
        description: "Listener reflects back to the speaker the feelings they are hearing expressed."
        },
     {          
        concept: "curiosity",
        fulltitle: "curiosity",
        description: "Listener responds to reflexive reaction by instead choosing curiosity over being right."
    },
     {
        concept: "being present",       
        fulltitle: "being present",
        description: "Listener makes an effort to just be present with the speaker."
    },
    {
        concept: "speaking up",
        fulltitle: "speaking up",
        description: "Instead of shutting down, or closing off, the speaker chooses to engage and speak up."
    },
    {
        concept: "taking responsibility",
        fulltitle: "taking responsibility",
        description: "Accepting accountability, being proactive. Suggesting a plan of action to move forward or accepting resposibility for your part in the situation."
        },
    {
        concept: "assume positive intent",
        fulltitle: "assume positive intent",
        description: "Listener self-regulates defensiveness or other reaction and instead assumes positive intent from the speaker."
    }, 
    
    ]

let responses = intentionalResponses.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)
 

    function InfoBox(props) {
        return (
            <div className="fixed inset-0" onClick={props.toggleInfoBox}>
            <div className="infobox z-40">
                <div className="font-mukta text-gray-500 text-lg tracking-wide font-bold text-center mx-4 my-8 leading-5">{infoBox.title}</div>
                    <div className="font-mukta text-base text-gray-500 mx-5 whitespace-pre-line">{infoBox.content}</div>
            </div>
            </div>
        )
    }

    function Concept(props) {
        return (
            <div className="cursor-pointer flex flex-col justify-center align-middle" onClick={props.handleConceptClick}>
                <div className="select-none text-center tracking-wide font-mukta text-gray-500 drop-shadow-sm">{props.text}</div>
            </div>
        )
    }



    function handleConceptClick(conceptObj) {
        setInfoBox(prevInfoBox => ({
            isDisplayed: true,
            title: conceptObj.fulltitle,
            content: conceptObj.description
        }))
    }


    function toggleInfoBox() {
        setInfoBox(prevInfoBox => ({
            ...prevInfoBox,
            isDisplayed: !infoBox.isDisplayed,
        }))
    }

    return (
        <>
        <div className="content-grid">
            {responses}
        </div>
        {infoBox.isDisplayed && <InfoBox toggleInfoBox={toggleInfoBox} />}
        </>
    )
    
}

