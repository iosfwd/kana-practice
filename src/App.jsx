import { useState, useEffect } from 'react'
import KANA from './data/kana.js'

const randomIndex = (n) => {
  return Math.floor(Math.random() * n)
}

 const getRandomKana = (kanaType) => {
    const kanaList = KANA[kanaType]
    const randomKana = kanaList[randomIndex(kanaList.length)]
    return randomKana
  }

function App() {
  const [kanaType, setKanaType] = useState('hiragana')
  const [currentKana, setCurrentKana] = useState(null)
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    const randomKana = getRandomKana(kanaType)
    setCurrentKana(randomKana)
    setUserInput('')
  }, [kanaType])

  const checkAnswer = (event) => {
    event.preventDefault()
    if (currentKana.romaji.includes(userInput.toLowerCase())) {
      setFeedback('⭕️ Correct!')
      setTimeout(() => {
        setUserInput('')
        setFeedback(null)
        setCurrentKana(getRandomKana(kanaType))
      }, 1000)
    } else {
      setFeedback(`❌ Incorrect! The correct answer is: ${currentKana.romaji[0]}`)
      setTimeout(() => {
        setUserInput('')
        setFeedback(null)
        setCurrentKana(getRandomKana(kanaType))
      }, 1000)
    }
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Kana Practice</h1>
      <div>
        <label>
          <input
            type="radio"
            value="hiragana"
            checked={kanaType === 'hiragana'}
            onChange={() => setKanaType('hiragana')}
          />
          Hiragana
        </label>
        <label>
          <input
            type="radio"
            value="katakana"
            checked={kanaType === 'katakana'}
            onChange={() => setKanaType('katakana')}
          />
          Katakana
        </label>
      </div>
        <div style={{ fontSize: '96px', textAlign: 'center', lineHeight: '1.1', margin: '8px 0 16px' }}>
          {currentKana?.kana}
        </div>
      <form onSubmit={checkAnswer}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          autoFocus
          style={{ fontSize: '24px', padding : '10px 14px', border: '2px solid #ddd', borderRadius: '12px', outline: 'none', textAlign: 'center' }}
        />
      </form>
      <div>{feedback}</div>
    </div>
  )
}

export default App
