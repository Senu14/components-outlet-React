import React from "react";

class AddForm extends React.Component {
//State in Class Components

state = {
     name: "",
     email: "",
}
// We use e.preventDefault() instead of refresh the page.
add = (e) => {
     e.preventDefault();
}
     render() {
          return (
               <div className="ui main">
               <h2>Add Contact</h2>
               <form className="ui form" onSubmit={this.add}>
                  <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" 
                    value={this.state.name}

           //We use (this.setState) to update the value of name.
                    onChange={(e) => this.setState({name: e.target.value})} />
                    </div> 
                    <div className="field">
                    <label>Email</label>
                    <input type="text" Email="Email" placeholder="Email"
                      value={this.state.email}

          //We use (this.setState) to update the value of email.
                    onChange={(e) => this.setState({email: e.target.value})} /> 
                    </div> 
                    <button className="ui button pink">Add</button>
               </form>
               </div>
               
          )
     }

}

export default AddForm;