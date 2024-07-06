import { useEffect } from "react"
import { FaRegClock } from "react-icons/fa"

export default function Timer({ timeLeft, onTimeUp }) {

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => onTimeUp(timeLeft - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [timeLeft, onTimeUp])

    return (
        <div className="flex gap-2 items-center font-medium">
            <FaRegClock />
            <p className="text-red-700">Time left: {timeLeft}s</p>
        </div>
    )
}
