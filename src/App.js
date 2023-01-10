import React, { useEffect, useState } from 'react';
import './App.css';
import Notecontainer from './Components/NoteContainer/Notecontainer';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {

  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem('STICKY-NOTES'))|| [])

  const addNote=(color)=>{
    const tempNotes =[...notes]

    tempNotes.push({
      id: Date.now() +"" +Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    });
    setnotes(tempNotes)
  }

  const deleteNote = (id) =>{
    const tempNotes=[...notes];

    const index = tempNotes.findIndex((item) => item.id === id)
  
    if (index < 0) return
    tempNotes.splice(index, 1)
    setnotes(tempNotes)
  }
  const updateText=(text,id)=> {
    const tempNotes=[...notes];

    const index = tempNotes.findIndex((item) => item.id === id)
  
    if (index < 0) return
    tempNotes[index].text = text
    setnotes(tempNotes)
  }

  useEffect(()=>{
    localStorage.setItem('STICKY-NOTES', JSON.stringify(notes))
  },[notes])
  return (
    <>
      <div className='App'>
        <Sidebar addNote={addNote}/>
        <Notecontainer notes={notes} 
        deleteNote={deleteNote}
        updateText={updateText}/>
      </div>
    </>
  );
}

export default App;
