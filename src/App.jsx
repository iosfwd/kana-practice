import { useState, useEffect } from 'react'
import { KANA, KANA_LAYOUT } from './data/kana.js'
import KanaTable from './components/KanaTable'
import Controls from './components/Controls'
import KanaProduction from './components/KanaProduction'
import KanaRecognition from './components/KanaRecognition'

const randomIndex = (n) => Math.floor(Math.random() * n)
const getRandomKana = (kanaList) => kanaList[randomIndex(kanaList.length)]

const App = () => {
  const [kanaType, setKanaType] = useState('hiragana')
  const [currentKana, setCurrentKana] = useState(null)
  const [selectedKana, setSelectedKana] = useState([])
  const [showTable, setShowTable] = useState(false)
  const [mode, setMode] = useState('recognition')

  const nextKana = () => {
    const activeList = selectedKana.length > 0 ? selectedKana : KANA[kanaType]
    setCurrentKana(getRandomKana(activeList))
  }

  useEffect(() => {
    nextKana()
  }, [kanaType, selectedKana])

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '16px' }}>
      <h1 style={{ textAlign: 'center' }}>Kana Practice</h1>

      <Controls
        kanaType={kanaType}
        setKanaType={setKanaType}
        showTable={showTable}
        setShowTable={setShowTable}
        mode={mode}
        setMode={setMode}
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

      {mode === 'recognition' ? (
        <KanaRecognition
          currentKana={currentKana}
          nextKana={nextKana}
        />
      ) : (
        <KanaProduction currentKana={currentKana}
                        nextKana={nextKana}
        />
      )}
    </div>
  )
}

export default App
