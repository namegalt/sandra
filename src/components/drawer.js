import React, { Fragment } from 'react'
import ToggledNav from './toggledNav'
import {DraverWrapper} from './components'

class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state.isToggleOn)
      }

      handleClose() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
      }

    render() {
      return (
        <div>
        <DraverWrapper open={this.state.isToggleOn}>
          <div onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </DraverWrapper>
         <ToggledNav open={this.state.isToggleOn} close={this.handleClose}/>
        </div>
      )
    }
  }

  export default Drawer