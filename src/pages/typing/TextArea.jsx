import { useEffect, useState } from "react"

export default function TextArea({ onType, isDisabled }) {

  const [input, setInput] = useState("")

  useEffect(() => {
    if (isDisabled) setInput("")
  }, [isDisabled])

  const handleChange = (e) => {
    if (!isDisabled) {
      setInput(e.target.value)
      onType(e.target.value)
    }
  }

  return (
    <textarea
      className="text-area"
      placeholder="Start typing here..."
      rows="10"
      cols="50"
      value={input}
      onChange={handleChange}
      disabled={isDisabled}
    >
    </textarea>
  )
}
