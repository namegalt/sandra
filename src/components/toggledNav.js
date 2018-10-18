import React from 'react'
import Link from 'gatsby-link'
import {ToggledNavWrapper} from './components'

function ToggledNav(props) {
    return (
        props.open ? (
            <ToggledNavWrapper>
                <Link to="/team/" onClick={props.close}>Team</Link>
                <Link to="/publications/" onClick={props.close}>Publications</Link>
                <Link to="/projects/" onClick={props.close}>Projects</Link>
            </ToggledNavWrapper>
        ): (
            null
        )
    )
  }

export default ToggledNav