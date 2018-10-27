import React from "react";

class Blurb extends React.Component {
    state = {
      trigger: '',
      blurb: ''
    };

  
    render() {
      return (
        <div>
            <h4>Trigger<span>User</span></h4>
                    <p>{this.props.blurb}</p>
        </div>
      );
    }
  }
  
  export default Blurb;