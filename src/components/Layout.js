import React,{Component}from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'
class Layout extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            myitem:'',
            list:[]
        }
    }

myfun=(e)=>
{e.preventDefault();
let todo=this.state.list;
let item=this.state.myitem;
if(item.trim()=="")
{
    alert("add something in text")
}
else{
todo.push(item)
this.setState({myitem:''});
}
}
    InputHandler=(e)=>
    {
        this.setState({myitem:e.target.value})
    }
    deleteHandler=(id)=>{
        let l=this.state.list
        
        l.forEach((i,index)=>{
            
            if(index==id)
            {
                l.splice(index,1);
                this.setState({list:l})
            }
            
            
        })
        
    
    }
    render()
    {
        return(
        <div className='main'>   
    <h1 className='header-text'>To-Do List</h1> 
    <div className='row first'>
    <span className='col-md-offset-2'></span>
    <input type="text" name="myitem" value={this.state.myitem}  onChange={this.InputHandler} className="col-md-8" placeholder='type here..'/>
    <button type="button" className='col-md-1' onClick={this.myfun}>+</button>
    </div>
    <div className='tasklist'>

{    
   
     this.state.list.map((elem,index)=>{
         return(
        <div key={index+1} className='row inner'>
        <button  className="col-1 delbtn" onClick={this.deleteHandler.bind(this,index)}>x</button>
      <span className='col-8 col-sm-offset-0'>{elem}</span> </div>
         )
    })
    }      
    
    

    </div>
    </div>

)
    }
}
export default Layout;