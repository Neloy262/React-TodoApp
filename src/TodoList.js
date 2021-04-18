import React from "react";
import "./style.css";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let i=0
    const todos = this.props.textList.map((task) => {
      return (
        <div className="row"> 
         <div className="col-md-10">   
        <li className="list-group-item" style={{borderRadius:'7px',margin:'8px'}}>
          {task.text}
        </li>
        </div>
        <div className="col-md-2">
        <input
            // onClick={this.props.OnCheckBoxClicked}
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
            style={{marginTop:'22px'}}
          />
          <button onClick={this.props.OnDelete} id={i++} style={{marginTop:'15px'}} type="button" className="btn btn-danger btn-sm del-btn">Delete</button>
          </div>
        </div>
      );
    });
    return <ul className="list-group todolist">{todos}</ul>;
  }
}
export default TodoList;
