import { useState, useEffect } from 'react'
import { KANA, KANA_LAYOUT } from './data/kana.js'
import KanaTable from './components/KanaTable'
import KanaPractice from './components/KanaPractice'
import Controls from './components/Controls'

const randomIndex = (n) => Math.floor(Math.random() * n)
const getRandomKana = (kanaList) => kanaList[randomIndex(kanaList.length)]

function App() {
  const [kanaType, setKanaType] = useState('hiragana')
  const [currentKana, setCurrentKana] = useState(null)
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [selectedKana, setSelectedKana] = useState([])
  const [showTable, setShowTable] = useState(false)

  useEffect(() => {
    const activeList = selectedKana.length > 0 ? selectedKana : KANA[kanaType]
    setCurrentKana(getRandomKana(activeList))
    setUserInput('')
  }, [kanaType, selectedKana])

  const checkAnswer = (input) => {
    if (currentKana.romaji.includes(input.toLowerCase())) {
      setFeedback({ type: 'correct', message: '⭕️ Correct!' })
    } else {
      setFeedback({ type: 'incorrect', message: `❌ Incorrect! Correct: ${currentKana.romaji[0]}` })
    }

    setTimeout(() => {
      const activeList = selectedKana.length > 0 ? selectedKana : KANA[kanaType]
      setUserInput('')
      setFeedback(null)
      setCurrentKana(getRandomKana(activeList))
    }, 1000)
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '16px' }}>
      <h1 style={{ textAlign: 'center' }}>Kana Practice</h1>

      <Controls
        kanaType={kanaType}
        setKanaType={setKanaType}
        showTable={showTable}
        setShowTable={setShowTable}
      />

      {showTable && (
        <KanaTable
          kanaType={kanaType}
          selectedKana={selectedKana}
          setSelectedKana={setSelectedKana}
          layout={KANA_LAYOUT}
          kanaData={KANA}
        />
      )}

      <KanaPractice
        currentKana={currentKana}
        userInput={userInput}
        setUserInput={setUserInput}
        feedback={feedback}
        checkAnswer={checkAnswer}
      />
    </div>
  )
}

export default App
