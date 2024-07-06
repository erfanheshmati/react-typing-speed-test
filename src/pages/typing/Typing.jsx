import { Button } from "flowbite-react";
import TextArea from "./TextArea";
import TextDisplay from "./TextDisplay";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetTest, startTest, submitTest, updateTimeLeft, updateTypedChars } from "../../redux/features/TypingTestSlice"
import SpeedStats from "./SpeedStats";

export default function Typing() {

    const dispatch = useDispatch()
    const { text, currentIndex, timeLeft, isStarted, typedChars, wpm, accuracy, isSubmitted } = useSelector((state) => state.typingTest)

    useEffect(() => {
        if (isStarted && timeLeft > 0) {
            dispatch(updateTypedChars(typedChars))
        }
    }, [typedChars, timeLeft, isStarted, dispatch])

    const handleType = (value) => {
        if (!isStarted) dispatch(startTest())
        dispatch(updateTypedChars(value))
    }

    const handleTimeup = (newTimeLeft) => {
        dispatch(updateTimeLeft(newTimeLeft))
    }

    const handleSubmit = () => {
        dispatch(submitTest())
    }

    const handleReset = () => {
        dispatch(resetTest())
    }

    return (
        <div className="my-8 space-y-4 px-4">
            <h2 className="text-3xl mb-5 font-semibold">Typing Speed Test</h2>
            <TextDisplay text={text} currentIndex={currentIndex} />
            <TextArea onType={handleType} isDisabled={isSubmitted} />
            <Timer timeLeft={timeLeft} onTimeUp={handleTimeup} />
            {
                isSubmitted && <SpeedStats wpm={wpm} accuracy={accuracy} />
            }
            <div className="flex gap-5">
                <Button color="blue" onClick={handleSubmit}>Submit Test</Button>
                <Button color="failure" onClick={handleReset}>Reset Test</Button>
            </div>
        </div>
    )
}
