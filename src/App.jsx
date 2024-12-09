
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ViewImages from './components/ViewImages'

function App() {

  const [submitValue,setSubmitValue]=useState("")
  
  return (
    <>
     <Header setSubmitValue={setSubmitValue} /> 
     <ViewImages submitValue={submitValue} />
    </>
  )
}

export default App
