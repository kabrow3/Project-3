import React from "react";
import Modal from "react-responsive-modal";
import InputBox from "../InputBox";
import API from "../../utils/API";
import Select from 'react-select'

const triggerOptions = [
  { value: 'Eating Disorders', label: 'Eating Disorders' },
  { value: 'Police Brutality', label: 'Police Brutality' },
  { value: 'R*pe', label: 'R*pe' },
  { value: 'Su*c*de/Self-H*rm', label: 'Su*c*de/Self-H*rm' },
  { value: 'Flashing Lights/Strobe Effect', label: 'Flashing Lights/Strobe Effect' },
  { value: 'Sexism', label: 'Sexism' },
  { value: 'Racism/Prejudice', label: 'Racism/Prejudice' },
  { value: 'Domestic Violence', label: 'Domestic Violence' },
  { value: 'Gunfire/Gun Violence', label: 'Gunfire/Gun Violence' },
  { value: 'Racism/Prejudice', label: 'Racism/Prejudice' },
  { value: 'Warfare', label: 'Warfare' }
]

class BlurbModal extends React.Component {
  state = {
    triggers: [],
    selectedTrigger: "",
    validationError: "",
    blurb: ''
  };

  // componentDidMount() {
  //   fetch(API.findAllTriggers)
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       let triggersFromApi = data.map(trigger => { return {value: trigger, display: trigger} })
  //       this.setState({ triggers: [{value: '', display: '(Select your trigger)'}].concat(triggersFromApi) });
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state.blurb)

    API.insertBlurb({
      blurb : this.state.blurb,
      UserId: this.props.UserId,
      MovieImdbID: this.props.MovieImdbID,
      TriggerId: this.props.TriggerId
    })
    .then(res => {
      console.log(`I'm the response ${res}`);
      // this.setState({
      //     blurb: '',
      //     open: false
      // }, () => console.log(this.state));
  });
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
        <br />
        <h4 className="text-center">Add your feedback</h4>


        {/* <select value={this.state.selectedTrigger} 
                onChange={(e) => this.setState({selectedTrigger: e.target.value, validationError: e.target.value === "" ? "You must select a trigger" : ""})}>
          {this.state.triggers.map((trigger) => <option key={trigger.value} value={trigger.value}>{trigger.display}</option>)}
        </select>
        <div style={{color: 'red', marginTop: '5px'}}>
          {this.state.validationError}
        </div> */}
        {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a Trigger
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Domestic Violence</a>
                <a class="dropdown-item" href="#">Eating Disorders</a>
                <a class="dropdown-item" href="#">Flashing Lights/Strobe Effect</a>
                <a class="dropdown-item" href="#">Graphic Sexual Content</a>
                <a class="dropdown-item" href="#">Graphic Violence</a>
                <a class="dropdown-item" href="#">Gunfire/Gun Violence</a>
                <a class="dropdown-item" href="#">Mental Health Issues</a>
                <a class="dropdown-item" href="#">Racism/Prejudice</a>
                <a class="dropdown-item" href="#">Sexism</a>
                <a class="dropdown-item" href="#">Sexual Assault</a>
                <a class="dropdown-item" href="#">Suicide/Self-Harm</a>
                <a class="dropdown-item" href="#">Warfare</a>
            </div>
          </div> */}
        <form className="col-sm-12">
          <div className="">
            <label>
              Please select trigger(s):
          <Select
                options={triggerOptions}
                isMulti
                name="triggers"
                className="basic-multi-select"
                classNamePrefix="select" />
            </label>
            <InputBox type="text" name="blurb" label="Blurb" value={this.state.blurb} onChange={this.handleChange} />
          </div>
          <br />
          <button type='submit' className='col-sm-12 btn btn-primary' onClick={this.handleClick}>Submit</button>
        </form>
      </Modal>
    );
  }
}

export default BlurbModal;