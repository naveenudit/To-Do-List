import { useState } from 'react';
import './App.css';

function App() {

  let [todoList,settodoList]=useState([])

  let saveToDOList=(event)=>{

    let todoname=event.target.todoname.value;
    if(!todoList.includes(todoname)){
      let finaltodo=[...todoList,todoname]
      settodoList(finaltodo)
    }
    else{
      alert("Already Exists...");
    }


    event.preventDefault();
  }

  let list = todoList.map((value,index)=>{
    return(
      <ToDoListItem value={value} key={index} indexNumber={index} todoList={todoList} settodoList={settodoList}/>
    )
  })

  return (
    <div className="App">
      <div>
        <h1>To-do List</h1>
        <form onSubmit={saveToDOList}>
          <input type='text' name='todoname'/>
          <button>Save</button>
        </form>

        <div className='outerdiv'>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({value, indexNumber, todoList, settodoList}){


  let [status,setstutus]=useState(false)
  let checkstatus=()=>{
    setstutus(!status)
  }
  let deleteRow=()=>{
    let finalList=todoList.filter((v,i)=>i!=indexNumber)
    settodoList(finalList)
  }
  return(
    <li className={(status)?'completetodo' :''} onClick={checkstatus}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}