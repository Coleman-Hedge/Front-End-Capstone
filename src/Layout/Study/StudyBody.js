import React, {useState,} from "react";

function StudyBody({ cards }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFront, setIsFront] = useState(true);

    const handleFlip = () => {
        setIsFront(!isFront);
    }

    const handleNext = () => {
        const nextIndex = currentCardIndex + 1;
        if(nextIndex < cards.length) {
            setIsFront(true);
            setCurrentCardIndex(nextIndex);
        } else {
            console.log("Back to beginning")
            setIsFront(true);
            setCurrentCardIndex(0);
        }
    }

    return (
        <>
            <p>Card {currentCardIndex + 1} of {cards.length}</p>
            {isFront ? (
                <>
                    <p>{cards[currentCardIndex].front}</p>
                    <button onClick={handleFlip}>Flip</button>
                </>
            ) : (
                <>
                    <p>{cards[currentCardIndex].back}</p>
                    <button onClick={handleNext}>Next</button>
                </>
            )}
        </>
    );
}

export default StudyBody;
