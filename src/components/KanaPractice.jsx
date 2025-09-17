function KanaPractice({ currentKana, userInput, setUserInput, feedback, checkAnswer }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    checkAnswer(userInput)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
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

export default KanaPractice
