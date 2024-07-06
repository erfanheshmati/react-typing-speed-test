export default function TextDisplay({ text, currentIndex }) {
    return (
        <div>
            <p>
                {
                    text.split("").map((char, index) => (
                        <span key={index} className={index < currentIndex ? "correct" : ""}>
                            {char}
                        </span>
                    ))
                }
            </p>
        </div>
    )
}
