function KanaCell({ kanaObj, romaji, selected, onToggle }) {
  return (
    <td
      style={{
        border: '1px solid #ddd',
        textAlign: 'center',
        padding: '6px',
        verticalAlign: 'top',
        background: selected ? '#e6f0ff' : 'white'
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <span style={{ fontSize: '28px' }}>{kanaObj.kana}</span>
        <span style={{ fontSize: '12px', color: '#555' }}>{romaji}</span>
        <input type="checkbox" checked={selected} onChange={onToggle} />
      </label>
    </td>
  )
}

export default KanaCell
