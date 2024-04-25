import React, { useEffect, useState } from "react"

const TypingText = ({
  text,
  speed = 100,
  onComplete,
  pushQuestion,
  boolFinish,
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedText.length < text.length) {
        setDisplayedText((prev) => prev + text[displayedText.length])
      } else {
        clearInterval(interval)
        setIsTyping(false)
        if (onComplete) {
          onComplete()
          if (!boolFinish) {
            pushQuestion()
          }
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [displayedText, text, speed, onComplete])

  return <span>{displayedText}</span>
}

export default TypingText
