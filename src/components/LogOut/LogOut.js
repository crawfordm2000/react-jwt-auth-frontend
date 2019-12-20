import React, { Component } from 'react'

import './LogOut.css'

class LogOut extends Component {
  render() {
    return (
      <div className='logout-wrap'>
        <h3 className='logout-header'>Log Out</h3>

        <form className='btn logout-btn'>
          <input className='logout-text' value='Log Out' type='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
