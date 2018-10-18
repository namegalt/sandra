import React from 'react'
import Link from 'gatsby-link'
import Drawer from './drawer'
import {HeaderWrapper, Navigation, Logo} from './components'

import mail from '../images/mail2.svg'

const Header = ({ siteTitle }) => (
  <div>
    <HeaderWrapper>
        <Link to="/">
        <Logo>
          <p>{siteTitle}</p>
          <img src={mail}/>
          </Logo>
        </Link>
      
      <Navigation>
        <Link to="/team">Team</Link>
        <Link to="/press">Press</Link>
        <Link to="/projects/">My projects</Link>
      </Navigation>
    </HeaderWrapper>
    <Drawer>
    </Drawer>
  </div>
)

export default Header
