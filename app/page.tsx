'use client';
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [inputText, setIputText] = useState("")
  const [items, setItems] = useState([""])

  function onEnter(){
    if (!inputText) return 

    setItems([inputText, ...items])
    setIputText("")
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

      <input placeholder="Enter your name"
        name="task" value={inputText}
        onChange={(e) => setIputText(e.target.value)}
        />
      <button onClick={onEnter} style={{border: "1px solid black"}}>
        Enter
      </button>

      <br />

      {items.map(item =>  <p key={item}>{item}</p> )}
      </div>
    </main>
  )
}
