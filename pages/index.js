import { useState } from 'react'

export default function Home() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const addItem = () => {
    const value = text.trim()
    if (!value) return
    setItems([...items, value])
    setText('')
  }

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
