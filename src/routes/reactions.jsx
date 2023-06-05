import React from "react"
import { useState } from "react"

export default function Reactions() {
   const [infoBox, setInfoBox] = useState({ isDisplayed: false, title: "", content: "" })


let habitualReactions = 
    [
    {
        concept: "giving advice",
        fulltitle: "giving advice, problem solving",
        description: `Listener tells the speaker what they should do.

        Listener assumes the most helpful thing they can do is to give recommendations or describe how they would address the issue.`
    }, 
    {
        concept: "defensiveness",
        fulltitle: "defensiveness",
        description: `Listener is acutely sensitive to criticism where there is none intended.

        Gets defensive, dismissive, or incorrectly assumes the speaker is talking about them.
        
        "What does this have to do with me?"

        Listener fixated on perceived threat or criticism.`
     },
     {
        concept: "changing subject",       
        fulltitle: "changing the subject",
         description: `Listener makes a connection to something the speaker says and decides to shift the topic.
        
        Listener picks up on details in the conversation and inserts themself into the narrative or relates it back to them.`
    },
    {          
        concept: "static labeling",
        fulltitle: "static labeling, diagnosing",
        description: `Listener interprets or evaluates speaker's behavior with a static label, judgement, or diagnosis. Listener tries to fit speaker into a framework or modality.
        
        "You always get so defensive in these situations."

        "You see it that way because you're an INFP personality type."`
    }, 
    {
        concept: "dismissing feelings",
        fulltitle: "dismissing difficult feelings",
        description: `Listener trys to make the speaker feel better with dismissive comments, even if well-intentioned.
        
        "Everything is going to be okay."
        
        "There is no need to feel that way."
        
        Dismisses difficult feelings instead of relating to them with curiosity.`
    },     
    {
        concept: "sarcasm",
        fulltitle: "sarcasm",
        description: `Listener replies with sarcasm, attempts to make a joke or inject humor into conversation. 
        
        Assumes that sarcasm is a good way to keep things light and easy-going.`
    },
    {
        concept: "leading questions",
        fulltitle: "leading questions, interrogating",
        description: `Listener uses directed or continued questioning to prompt speaker into explanation.
        
        Listener challenges speaker into "self-awareness"
        
        Subtle blame. New age bullying. Power over.`
    },
    {
        concept: "shutting down",
        fulltitle: "shutting down",
        description: `Listener closes down, disengages from interaction.
        
        Listener rehearses what they want to say but refrains from speaking up.

        Self-preservation, withdrawing, minimizing response.`
    },
    {
        concept: "devil's advocate",
        fulltitle: "devil's advocate",
        description: `Listener plays devil's advocate or asks the speaker if they've considered the other person's perspective. 
        
        Listener is more invested in the "other" perspective than hearing out the speaker.`
    },
    {
        concept: "intellectualizing",
        fulltitle: "intellectualizing",
        description: `Listener references expert opinion, academic studies, a book, or article they recently read.
        
        Brings in an “authoritative” source to make a point.
        
        "If you were familiar with Carl Rogers' work on unconditional positive regard, this would make a lot more sense."`
    },
    {
        concept: "sympathy",
        fulltitle: "sympathy",
        description: `Listener makes an assumption about how the speaker must be feeling instead of taking time to really see where they are at.
        
        Listener shares their feelings of condolences rather than inquiring about the speaker's unique feelings and needs.`
    },
    {
        concept: "one-upping",
        fulltitle: "one-upping",
        description: `Listener tells the speaker that they've been through something even more significant than what the speaker is currently describing.
        
        Related: storytelling, commiserating`
    },
    {
        concept: "commiserating",
        fulltitle: "commiserating",
        description: `Listener agrees with the speaker through over-identification; does not honor the uniqueness of speaker's position.
        
        "I know exactly what you mean."

        "I've had that exact experience!"`
    },
    {
        concept: "storytelling",
        fulltitle: "personal storytelling",
        description: `Listener takes the focus away from speaker and tells stories relating back to themself.
        
        Makes a point by telling a story. Assumes people should listen to the story and find it entertaining or valuable. 
        `
    },
    ]

let reactions = habitualReactions.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)
 

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
            {reactions}
        </div>
        {infoBox.isDisplayed && <InfoBox toggleInfoBox={toggleInfoBox} />}
        </>
    )
    
}

