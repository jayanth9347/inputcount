import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {click:""}
  onCount = (event) => {
    this.setState({click: event.target.value})
  }
  render() {
    const {click} = this.state
    console.log(click)
    const result = click 
    return (
      <div className="background">
        <div className="container">
          <div>
            <h1> Calculate the Letters you enter </h1>
            <label>Enter the phrase</label>
            <input type="text"  placeholder="Enter the phrase" onChange={this.onCount}  />
            <div>
              <p className="button"> No.of letters: {result.length}  </p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image" alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
