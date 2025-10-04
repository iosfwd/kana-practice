import { useId, useState } from 'react'
import KanaDisplay from './KanaDisplay'

const KanaRecognition = ({ currentKana, nextKana }) => {
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const kanaRecognitionId = useId()

  const checkAnswer = (answer) => {
    if (currentKana.romaji.includes(answer.toLowerCase())) {
      setFeedback({ type: 'correct', message: '⭕️ Correct!' })
    } else {
      setFeedback({ type: 'incorrect', message: `❌ Incorrect! Correct: ${currentKana.romaji[0]}` })
    }

    setTimeout(() => {
      setUserInput('')
      setFeedback(null)
      nextKana()
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkAnswer(userInput)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <KanaDisplay currentKana={currentKana} />

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        autoFocus
        style={{
          fontSize: '24px',
          padding: '10px 14px',
          border: '2px solid #ddd',
          borderRadius: '12px',
          textAlign: 'center',
          width: '200px'
        }}
        id={kanaRecognitionId}
      />
    </form>

    {feedback && (
      <div
        style={{
          marginTop: '16px',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        {feedback.message}
      </div>
    )}

    </div>
  )
}

export default KanaRecognition
