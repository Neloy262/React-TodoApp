import React from "react";
import "./style.css";
class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", completed: false, priority: 0 };
  }
  OnTextChange = (e) => {
    this.setState({ text: e.target.value });
  };
  OnPriorityChange=(e)=>{
    this.setState({ priority: e.target.value });
  }
  render() {
    return (
      <div className="container fluid topHalf">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onFormSubmit({
              text: this.state.text,
              priority: this.state.priority,
            });
            this.setState({ text: "" });
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
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
          <input
            type="number"
            placeholder="Priority"
            onChange={this.OnPriorityChange}
            style={{
              width: '8%',
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "25px",
              borderRadius: "8px",
              border: "hidden",
            }}
          ></input>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "5px", marginLeft: "15px" }}
          >
            Submit
          </button>
          <button
            // type="submit"
            className="btn btn-primary"
            style={{ margin: "5px", marginLeft: "10px" ,float:'right'}}
            onClick={this.props.OnSort}
          >
            Sort
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBarComponent;
