import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [isNumeric, setIsNumeric] = useState(false)
  const [isSpecialChar, setIsSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumeric) str += "0123456789"
    if (isSpecialChar) str += "`~!@#$%^&*-_=+[]{}"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [length, isNumeric, isSpecialChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password, setIsCopiedText])

  useEffect(() => {
    generatePassword()
  }, [length, isNumeric, isSpecialChar, generatePassword])

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
        <div className="shadow my-4 py-4">
          <div className="flex w-full rounded-lg overflow-hidden rounded=lg">
          <input name="generated-password" className="w-full py-1 px-3 bg-white" type="text" placeholder="Password" value={password} ref={passwordRef} readOnly />
          <button className="bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard()}>Copy</button>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="flex text-center gap-x-2">
            <input type="range" name="password-length" min={8} max={50} value={length} className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex text-center gap-x-2">
            <input type="checkbox" name="isNumeric" defaultChecked={isNumeric} onChange={() => setIsNumeric((prev) => !prev)}/>
            <label>Numbers</label>
          </div>
          <div className="flex text-center gap-x-2">
            <input type="checkbox" name="isSpecialChar" defaultChecked={isSpecialChar} onChange={() => setIsSpecialChar((prev) => !prev)}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
