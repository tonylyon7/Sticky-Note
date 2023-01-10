import React from 'react'
import Note from '../Note/Note'
import './notecontainer.css'

function Notecontainer(props) {

    const reverseArray = (arr) => {
        const array = []
        for (let i=arr.length -1; i>=0; --i){
            array.push(arr[i])
        }
        return array;
    };
    const notes = reverseArray(props.notes);
    // console.log(props.notes,notes)
  return (
    <div className='Note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
            {
                notes?.length>0 ?
                notes.map((item) => <Note 
                key={item.id} note={item}
                deleteNote= {props.deleteNote}
                updateText={props.updateText}
                />) : (<h3>No Note Present</h3>)
            }
        </div>
    </div>
  )
}

export default Notecontainer