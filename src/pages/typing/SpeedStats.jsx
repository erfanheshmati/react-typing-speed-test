export default function SpeedStats({ wpm, accuracy }) {
    return (
        <div>
            <p>Words per minute: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
        </div>
    )
}
