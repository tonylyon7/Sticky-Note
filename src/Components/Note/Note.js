import React from 'react'
import './note.css'
import {RiDeleteBin6Line} from 'react-icons/ri'

let timer=500, timeout
function Note(props) {

  const formatDate = (value) => {
    if (!value) return ""
    const date=new Date(value)

    const monthNames=["JAN", "FEB", "MARCH", "APL", "MAY", "JUN", "JLY", "AUG",
    "SEPT", "OCT", "NOV", "DEC"]
    
    let hrs = date.getHours()
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes()
    min = min < 10 ? "0" + min : min

    let day = date.getDate()
    const month = monthNames[date.getMonth()]

    return `${hrs}:${min}${ampm} ${day} ${month}`
  }

  const debounce = (func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer)
  }

  const updateText = (text, id) => {
    debounce(() =>props.updateText(text, id))
  }
    
  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea className='note-text' defaultValue={props.note.text}
        onChange={(event)=>updateText(event.target.value, props.note.id)}
        />
        <div className='footer'>
        <p>{formatDate(props.note.time)}</p>
        <RiDeleteBin6Line className='delete' 
        onClick={()=>props.deleteNote(props.note.id)}/>
        </div>
    </div>
  )
}

export default Note