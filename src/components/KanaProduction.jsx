import { useState, useRef } from 'react'
import { Stage, Layer, Line } from 'react-konva';
import KanaDisplay from './KanaDisplay'

const KanaProduction = ({ currentKana, nextKana }) => {
  const [lines, setLines] = useState([])
  const isDrawing = useRef(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool: 'pen' , points: [pos.x, pos.y] }])
  }

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    const lastLine = lines[lines.length - 1]
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  }

  const handleMouseUp = () => {
    isDrawing.current = false;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>
      <Stage
        width={220}
        height={220}
        style={{
          margin: '24px auto',
          border: '2px solid #eee',
          borderRadius: '12px',
          backgroundColor: '#fafafa',
          width: '220px',
          height: '220px'
        }}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >

        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>

      </div>
      <div>
        Write <strong>{currentKana?.romaji[0]}</strong>
      </div>

      <div style={{ marginTop: '12px' }}>
        <button onClick={() => { setShowAnswer(!showAnswer) }}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        {
          showAnswer &&
            <KanaDisplay currentKana={currentKana} />
        }
        <button onClick={() => {
                  nextKana()
                  setShowAnswer(false)
                  setLines([])
                }}>
          {'Next'}
        </button>

      </div>
    </div>
  )
}

export default KanaProduction
