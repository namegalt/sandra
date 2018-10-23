import React from 'react'
import Link from 'gatsby-link'
import {ToggledNavWrapper} from './components'

function ToggledNav(props) {
    return (
        props.open ? (
            <ToggledNavWrapper>
                <Link to="/" onClick={props.close}>Portfolio</Link>
                <Link to="/team/" onClick={props.close}>Team</Link>
                <Link to="/press/" onClick={props.close}>Press</Link>
                <Link to="/projects/" onClick={props.close}>Projects</Link>
            </ToggledNavWrapper>
        ): (
            null
        )
    )
  }

export default ToggledNav