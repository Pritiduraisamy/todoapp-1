import React from 'react';
import './App.css';
import Todo from './components/Todo.js';

class App extends React.Component{
    render(){
        return(
            <Todo/>
        )
    }
}
export default App;



















// import logo from './logo.svg';
// import React, { useState } from 'react';
// import './App.css';

//  function App() {
//   const [ toDoList, setToDoList ] = useState(data);

//   const handleToggle = (id) => {
//     let mapped = toDoList.map(task => {
//       return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
//     });
//     setToDoList(mapped);
// }

// } export default App;



































