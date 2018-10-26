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
                    <p>Donec nec accumsan nibh, ac tempor sapien. Cras id leo eget arcu imperdiet eleifend. Ut ornare vestibulum dolor, sit amet consectetur arcu aliquam id. Cras et elit tempus, placerat arcu ac, lacinia eros. Etiam ligula nisi, vulputate eget laoreet facilisis, venenatis ut leo. Cras ac suscipit ante. Curabitur risus dolor, gravida sed urna sed, dapibus pretium dui. Nam ullamcorper dignissim metus a lobortis. Pellentesque vel pellentesque tortor</p>
        </div>
      );
    }
  }
  
  export default Blurb;