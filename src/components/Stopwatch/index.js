import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    stringifiedMinutes: '00',
    stringifiedSeconds: '00',
    interval: '',
  }

  seconds = () => {
    const {seconds, minutes} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
    if (seconds === 59) {
      this.setState({seconds: 0})
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
      if (minutes === 59) {
        this.setState({minutes: 0})
      }
    }
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  start = () => {
    const {
      seconds,
      minutes,
      stringifiedSeconds,
      stringifiedMinutes,
    } = this.state
    const timer = setInterval(this.seconds, 1000)
    this.setState({interval: timer})
  }

  stop = () => {
    const {
      interval,
      seconds,
      minutes,
      stringifiedSeconds,
      stringifiedMinutes,
    } = this.state
    clearInterval(interval)
  }

  reset = () => {
    const {
      interval,
      seconds,
      minutes,
      stringifiedSeconds,
      stringifiedMinutes,
    } = this.state
    clearInterval(interval)
    this.setState({seconds: 0, minutes: 0})

    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
    clearInterval(interval)
  }

  render() {
    const {
      seconds,
      minutes,
      stringifiedSeconds,
      stringifiedMinutes,
    } = this.state
    return (
      <div className="container">
        <h1>Stopwatch</h1>
        <div>
          <div>
            <img
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p>Timer</p>
          </div>
          <h1>
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
