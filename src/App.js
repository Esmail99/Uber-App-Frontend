import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Drivers from './components/Drivers';

class App extends Component{
  constructor() {
    super();
    this.state = {
      firstInput: '',
      secondInput: '',
      drivers: [],
      didFirstSearch: false
    }
  }

  onFirstInputChange = (event) => {
    this.setState({firstInput: event.target.value})
  }

  onSecondInputChange = (event) => {
    this.setState({secondInput: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({didFirstSearch: true});
    fetch(`https://thawing-river-53139.herokuapp.com/drivers?x=${this.state.firstInput}&y=${this.state.secondInput}`)
    .then(response => response.json())
    .then(drivers => this.setState({drivers: drivers}))
    .catch(err => console.log(err))
  }

  render() {
    let driversList = this.state.drivers;
    driversList = driversList.map((driver,index) => {
      return(
        <li key={index}>
          <span className='name'>{driver.name}</span>
          <span className='rate'>{driver.rate}</span>
          <span className='dist'>{Math.floor(driver.dist.calculated/1000)} m</span>
        </li>
      )
    })

    return (
      <div>
        <Title />
        <div className='mw7-ns center pt1 pb1 br4 app-container'>
          <Form 
            onFirstInputChange={this.onFirstInputChange} 
            onSecondInputChange={this.onSecondInputChange} 
            onFormSubmit={this.onFormSubmit}
          />
          {
            this.state.didFirstSearch
            ? (
                driversList.length
                ? <Drivers driversList={driversList} />
                : <h2 className='tc'>Sorry, there is no availabe drivers at this location!</h2>
              )
            : <p></p>
          }
        </div>
      </div>
    );
  }
}

export default App;