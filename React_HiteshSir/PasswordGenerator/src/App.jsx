import { useCallback, useState, useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //  memoize function to avoid recreation on every render
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numAllowed,charAllowed,setPassword])
  //these dependencies are for optimization,cache me rakho apne memory me rakho


  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password)
  }, [password])
// by mentioning ? mark If passwordRef.current exists (not null or undefined), then call .select().Otherwise, just return undefined and don’t crash.



  //  regenerate when dependencies change
  useEffect(() => {
    generatePassword()
  }, [length,numAllowed,charAllowed,generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-lg font-semibold text-center'>Password Generator</h1>

        {/* Password + Copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white rounded-lg text-gray-800 font-mono text-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
            className='outline-none bg-blue-700 text-white py-1 px-3 shrink-0' 
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer accent-blue-700'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 accent-blue-700'>
            <input 
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 accent-blue-700'>
            <input 
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
