import React from 'react'
import SearchBarComponent from './SearchBarComponent'
import './style.css'
import TodoList from './TodoList'
class App extends React.Component{
  constructor(){
    super()
    this.state={textList:[]}
    this.clicked=false
  }
  OnDelete=(btn)=>{
    let newtextlist=[...this.state.textList]
    newtextlist.splice(btn.target.id,1)
    this.setState({textList:newtextlist})
  }
  onFormSubmit=(todo)=>{
    // console.log("Before",this.state)
    let holder={text:todo,completed:"false"}
    this.setState({textList:this.state.textList.concat(holder)})
    
  }
  render(){
    return(
      <div style={{padding:'69px'}}>
        <h3 style={{textAlign:'center',color:'white'}}>What are we doing today?</h3>
        <SearchBarComponent onFormSubmit={this.onFormSubmit} />
        <TodoList textList={this.state.textList} OnDelete={this.OnDelete}/>
      </div>
    )
  }
}

export default App;
