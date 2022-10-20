// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const RN = Math.ceil(Math.random() * 100)
    this.setState({number: RN})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btnContainer">
            <button type="button" className="btn" onClick={this.onGenerate}>
              Generate
            </button>
          </div>
          <p className="heading1">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
