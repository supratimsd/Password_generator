import {  useState,useEffect } from 'react'

function App() {
  const [len,setLen] = useState(8)  
  const [allowNum,setAllowNum] = useState(false)
  const [char,setChar] = useState(false)
  const [passwrd,setPasswrd] = useState("")
  
  
  const passwrdGenerator=()=>{
    let pass=""
    let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
   
    for (let i = 1; i <= str.length; i++) {
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
      
    }
    setPasswrd(pass);
}
const onChange=()=>{
  let pass=""
  let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  if(allowNum) str +="0123456789"
  if(char) str +="!@#$&"
  for (let i = 1; i <= len; i++) {
    let character = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(character)
  }
  setPasswrd(pass)
}

  const copyPasswordToClipboard = ((e) => {
    e.target.parentElement.querySelector(".w-full")?.select();
    // console.log(passwordRef.current,passwrd)
    e.target.parentElement.querySelector(".w-full")?.setSelectionRange(0, 12);
    window.navigator.clipboard.writeText(passwrd)
  })
    useEffect(()=>{
      passwrdGenerator()
    },[])
    useEffect(()=>{
      onChange();
    },[len,allowNum,char])
    return(
    <>
       
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
       <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
         <input
             type="text"
             value={passwrd}
             className="outline-none w-full py-1 px-3"
             placeholder="Password"
             readOnly
            
         />
         <button
         onClick={(e)=>{copyPasswordToClipboard(e);console.log(e.target.parentElement.querySelector(".w-full"))}}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         >copy</button>
         
     </div>
     <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
         <input 
         type="range"
         min={6}
         max={12}
         value={len}
          className='cursor-pointer'
          onChange={(e) => {setLen(e.target.value)}}
           />
           <label>Length: {len}</label>
       </div>
       <div className="flex items-center gap-x-1">
       <input
           type="checkbox"
           defaultChecked={allowNum}
           id="numberInput"
           onChange={() => {
            setAllowNum((prev) => !prev);
           }}
       />
       <label htmlFor="numberInput">Numbers</label>
       </div>
       <div className="flex items-center gap-x-1">
           <input
               type="checkbox"
               defaultChecked={char}
               id="characterInput"
               onChange={() => {
                   setChar((prev) => !prev )
               }}
           />
           <label htmlFor="characterInput">Characters</label>
       </div>
     </div>
 </div>

 </>
    
  )
}

export default App

















