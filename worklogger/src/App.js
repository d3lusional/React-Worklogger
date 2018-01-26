import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        work: [],
        personal: [],
        description: '',
        minutes: 0 ,
        currentProject: '',
  
      };

        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);

    }

onButtonClick(event) {
  //set state of new ProjectType
  //console.log('Description:');
  let projectState = this.state.currentProject
  console.log(projectState);
  if (projectState == 'work'){
    this.setState({work: this.state.work.concat([{minutes: this.state.minutes, description: this.state.description}]),
    description: '',
    minutes: '',
  })
    
  }else { 

    this.setState({personal: this.state.personal.concat([{minutes: this.state.minutes, description: this.state.description}]),
    description: '',
    minutes: '',
  })
    
  //console.log()
}
}

handleMinutesChange(event, option) {
 // console.log(event.target.value)
//console.log("event" +event)
// console.log("option" +option)
 this.setState({minutes: event.target.value})
}

handleDescriptionChange(event, option) {
  // console.log(event.target.value)
 // console.log("event:" +event)
 // console.log("option:" +option)
  this.setState({description: event.target.value})
}

handleOptionChange(event) {
 // console.log("this option is " + event.target.value)
  this.setState({currentProject: event.target.value})

}

displayCurrentPersonal (event, option) {
  let currentPersonal = this.state.personal
  let listPersonal = currentPersonal.map((currentPersonal) => <p>{currentPersonal}</p>
)
}

  render() {
    console.log(this.state.personal)
    return (

      <div className="App">
        <header className="row title App-header">
          <h1>Work Logger</h1>
        </header>
        <div onSubmit={this.onButtonClick} className="row">
              <div className="columnLeft">
                <p>Personal</p> 
                <select onChange={this.handleOptionChange} value={this.state.handleOptionChange} name="project">
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                </select>
                <p>Description</p>
                <input onChange={this.handleDescriptionChange} value={this.state.description} type="Text"/>
                <p>Minutes</p> 
                <input type="number" min={0} max={240} onChange={this.handleMinutesChange} value={this.state.minutes}/>
                <div className="columnLeft">
                <button onClick={this.onButtonClick}>Add</button>
                </div>
              </div>

            <div className="columnRight">
            </div>
        </div>
        <div className="boarder row">
            <div className="box columnLeft">
              <h3 className="floatLeft">Project</h3>
              <p className="floatRight">0:30</p>
                  <div className="timeBox">
                  {this.state.personal.map((minutes,idx) => ( 
                  <p key={idx} className=""> {minutes.minutes} <span className="textRed">{minutes.description}</span>  </p>
                  ))}
                
            
                  </div>
                
            </div>
            <div className="box columnRight">
            <h3 className="floatLeft">Work</h3>
            <p className="floatRight">0:30</p>
                <div className="timeBox">
                {this.state.work.map((minutes,idx) => ( 
                <p key={idx} className=""> {minutes.minutes} <span className="textRed">{minutes.description}</span>  </p>
                ))}
                </div>

              
            </div>
        </div>
      </div>
    );
  }
}

export default App;
