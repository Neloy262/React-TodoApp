import React from "react";
import './style.css'
class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "",completed:false};
  }
  OnTextChange=(e)=>{
    this.setState({ text: e.target.value })
  }
  render() {
    return (
        <div className="container fluid topHalf">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onFormSubmit(this.state.text);
          }}
        style={{display:'flex',justifyContent:'center'}}>
            <div className="form-group col-md-6">
              <input
                type="text"
                value={this.state.text}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Add todo"
                style={{ margin: "5px" }}
                onChange={this.OnTextChange}
              />
            </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ margin: "5px" ,marginLeft:'15px'}}
              >
                Submit
              </button>
        </form>
        </div>
    );
  }
}
export default SearchBarComponent;
