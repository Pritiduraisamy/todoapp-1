import React from 'react';
import './Todo.css'
import Listitems from './Listitems';
import update from 'react-addons-update';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:'',
                checkvalue:'false'
            }
        }
        this.handleInput=this.handleInput.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.completeitem=this.completeitem.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now(),
                checkvalue:'false'
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem=this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:'',
                    checkvalue:'false'
                }
            })

        }
    }
    completeitem(key){

        const findidxval= this.state.items.findIndex(item=>item.key===key);
        console.log("find index val: "+findidxval)        
        let tempchkval=false
        console.log("Checkvalue: "+this.state.items[findidxval].checkvalue)
        if (this.state.items[findidxval].checkvalue===true){
            tempchkval=false
        }
        else{
            tempchkval=true
        }
        this.setState(update(this.state, {
            items: {
                [findidxval]: {
                    checkvalue:  {
                        $set: tempchkval
                    }
                }
            }
        }));
      
    }
    
        
   
    deleteItem(key){
        const filteredItems= this.state.items.filter(item=>
            item.key!==key);
            this.setState({
                items:filteredItems
            })
    }
    render(){
        return(
            <div className="App">
            <header>
                <form id="to-do-app" onSubmit={this.addItem}>
                <h2>All Tasks</h2>
                    <input  id="input" type="text" placeholder="Add a new task"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                

                </form>
            </header>

            
            <Listitems items={this.state.items} completeitem={this.completeitem} deleteItem={this.deleteItem}></Listitems>  
            </div> 
        );
    }
}
export default App;
