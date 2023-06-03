import { useState } from "react"



export default function Concepts() {
    const [headerHabituals, setHeaderHabituals] = useState(true)
    const [infoBox, setInfoBox] = useState({isDisplayed: false, title: "", content: ""})


    function HeaderToggleOption(props) {
        const borderStyle = props.isSelected
            ? "border border-2 border-green-700 "
            : "border-none";

        const textStyle = props.isSelected
            ? "text-gray-700"
            : "text-gray-300";
        
        return (
            <div
                onClick={toggleHeader}
                className={`cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center ${borderStyle}`}>
                <div
                    className={`text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-6/12 ${textStyle}`}>{props.text}</div>
            </div>
        )
    }


    // TODO: IMPLEMENT TRANSITION DURATION
    // style={styles}

    // const styles = {
        //     border: props.isSelected ? "2px solid #04785780" : "none",
        //     color: props.isSelected ? "#4b5563" : "#B6B6B6",
        //     transition: "border-color 400ms ease, color 200ms ease",
        // }

    // function HeaderToggleOption(props) {
    //     const textStyle = props.isSelected
    //         ? "text-gray-700"
    //         : "text-gray-300";
        
    //     const isSelected = props.isSelected
        
        
    //     return (
    //         <div
    //             onClick={toggleHeader}
    //             className={({ isSelected }) =>
    //                 isSelected
    //                     ? "transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center border-2 border-green-700"
    //                     : "transition-all cursor-pointer w-1/2 h-14 rounded-full flex flex-col items-center justify-center border-none"
    //             }>
    //             <div
    //                 className={`text-lg text-center leading-5 font-mukta font-bold tracking-wide h-10 w-6/12 ${textStyle}`}>{props.text}</div>
    //         </div>
    //     )
    // }
    

    
    
    function Header(props) {
        return (
            <div className="transition-all flex flex-row w-10/12 items-center border rounded-full justify-between">
                <HeaderToggleOption text={`habitual\nreactions`} isSelected={headerHabituals}/>
                <HeaderToggleOption text="intentional responses" isSelected={!headerHabituals}/>
            </div>
        )
    }

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


    let habituals = habitualReactions.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)
    let intentionals = intentionalResponses.map(each => <Concept handleConceptClick={() => handleConceptClick(each)} key={each.concept} text={each.concept}/>)

    function toggleHeader() {
        setHeaderHabituals(!headerHabituals)
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
        <div className="flex items-center flex-col h-full w-full">
            <Header />
            <div className="content-grid">
                {headerHabituals && habituals}
                {!headerHabituals && intentionals}
            </div>
            {infoBox.isDisplayed && <InfoBox toggleInfoBox={toggleInfoBox} />}
        </div>
    )
}


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