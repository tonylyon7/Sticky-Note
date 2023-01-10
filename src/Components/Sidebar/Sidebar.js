import React, { useState } from 'react'
import './Sidebar.css'
import {AiFillPlusCircle} from 'react-icons/ai'

function Sidebar(props) {
    const color = ["#fe9b72", "#fec971", "#00d47e", "#b693fd", "#e4ee91", "purple", "red", "pink"]

    const [listOpen, setlistOpen] = useState(false);
  return (
    <div className='col-md-2 sidebar'>
        <AiFillPlusCircle className='plus' onClick={()=>setlistOpen(!listOpen)}/>

        <ul className={`sidebar-list ${listOpen?"sidebar-list-active":""}`}>
            {color.map((item,index)=> (
            <li key={index} 
                className='color-select' 
                style={{backgroundColor: item}}
                onClick={()=>props.addNote(item)}
            />
            ))}
        </ul>
    </div>
  )
}

export default Sidebar