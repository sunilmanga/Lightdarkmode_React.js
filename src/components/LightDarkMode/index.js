import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {st: true}

  bt = () => {
    this.setState(prev => {
      const {st} = this.state
      return {st: !prev.st}
    })
  }

  txt = () => {
    const {st} = this.state
    return st ? 'Light Mode' : 'Dark Mode'
  }

  cls = () => {
    const {st} = this.state
    return st ? 'l' : 'd'
  }

  render() {
    const k = this.txt()
    const cl = this.cls()
    console.log(cl)
    return (
      <div>
        <div className={cl}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.bt}>{k}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
