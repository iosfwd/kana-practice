import KanaCell from './KanaCell'

function KanaTable({ kanaType, selectedKana, setSelectedKana, layout, kanaData }) {
  const kanaMap = kanaData[kanaType].reduce((map, k) => {
    k.romaji.forEach((r) => (map[r] = k))
    return map
  }, {})

  const selectAll = () => setSelectedKana(kanaData[kanaType])
  const deselectAll = () => setSelectedKana([])
  const toggleKanaSelection = (kanaObj) => {
    setSelectedKana((prev) =>
      prev.includes(kanaObj) ? prev.filter((k) => k !== kanaObj) : [...prev, kanaObj]
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
        <button onClick={selectAll}>Select All</button>
        <button onClick={deselectAll}>Deselect All</button>
      </div>

      <table style={{ borderCollapse: 'collapse', margin: '0 auto', width: '100%' }}>
        <tbody>
          {layout.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((romaji, colIndex) => {
                if (!romaji) return <td key={colIndex}></td>
                const kanaObj = kanaMap[romaji]
                return (
                  <KanaCell
                    key={colIndex}
                    kanaObj={kanaObj}
                    romaji={romaji}
                    selected={selectedKana.includes(kanaObj)}
                    onToggle={() => toggleKanaSelection(kanaObj)}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KanaTable
