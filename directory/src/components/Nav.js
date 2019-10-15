import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <button onClick={this.props.prev} ><h4>{'< Previous'}</h4></button>
        <button onClick={this.props.next} ><h4>Next ></h4></button>
      </div>
    )
  }
} 