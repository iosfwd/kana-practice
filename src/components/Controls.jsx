function Controls({ kanaType, setKanaType, showTable, setShowTable }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
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

      <div style={{ marginTop: '12px' }}>
        <button onClick={() => setShowTable(!showTable)}>
          {showTable ? 'Hide Table' : 'Show Table'}
        </button>
      </div>
    </div>
  )
}

export default Controls
