function KanaDisplay({ currentKana }) {
  return (
    <div
      style={{
        fontSize: '96px',
        margin: '24px auto',
        border: '2px solid #eee',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#fafafa',
        width: '200px',
      }}
    >
      {currentKana?.kana}
    </div>
  )
}

export default KanaDisplay
