function Controls({ kanaType, setKanaType, showTable, setShowTable, mode, setMode }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
      <div>
        <label style={{ marginRight: '8px' }}>
          <input
            type="radio"
            checked={mode === 'recognition'}
            onChange={() => setMode('recognition')}
          />
          Recognition (type romaji)
        </label>
        <label>
          <input
            type="radio"
            checked={mode === 'production'}
            onChange={() => setMode('production')}
          />
          Production (draw kana)
        </label>
      </div>

      <div>
        <label style={{ marginRight: '8px' }}>
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

      <div style={{ marginTop: '12px' }}>
        <button onClick={() => setShowTable(!showTable)}>
          {showTable ? 'Hide Table' : 'Show Table'}
        </button>
      </div>
    </div>
  )
}

export default Controls
