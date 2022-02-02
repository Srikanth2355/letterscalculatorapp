// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  calculate = event => {
    const lengthofstr = event.target.value.replace(' ', '').length
    this.setState({
      count: lengthofstr,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="textcontainer">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="label" htmlFor="input">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.calculate}
          />
          <div className="countcontainer">
            <p className="para">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
