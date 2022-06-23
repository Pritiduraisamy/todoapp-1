import React from 'react'
import './Listitems.css'

    function Listitems(props){
    const items=props.items;
    const listItems=items.map(item=>
    {
        return<div className="list" key={item.key}>
            
           <p className='chk'>
           
             
              <input id="myCheckBox" onClick={()=>props.completeitem(item.key)} type="checkbox" class="checkbox" /> 
             
               <div className={item.key?"line-through": null}>{item.text}  </div>
                {/* <input id="myCheckBox"  type="checkbox" class="checkbox" />
                
              {item.text}   */}
        
             <i title='delete' onClick={()=>props.deleteItem(item.key)} className="fa fa-trash" />
             
            </p>
           
          </div>

 })


return(

    
    <div>
        {items && items.length>0?
            listItems:<p id="emptytask" style={{textAlign:"center",fontsize:"24px"}}>
                Seems like a quiet day
            </p>    
    }

    </div>
       
)}
export default Listitems;

        
       


       