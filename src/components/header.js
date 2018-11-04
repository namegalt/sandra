import React from 'react'
import Link from 'gatsby-link'
import Drawer from './drawer'
import {HeaderWrapper, Navigation, Logo} from './components'

import mail from '../images/mail2.svg'

const Header = ({ siteTitle }) => (
  <div>
    <HeaderWrapper>
       
        <Logo>
        <Link to="/">
          <p>{siteTitle}</p>
          </Link>
          <a href="mailto:aaleksandravovk@gmail.com" ><img src={mail}/></a>
        </Logo>
       
      
      <Navigation>
        <Link to="/">Portfolio</Link>
        <Link to="/press">Press</Link>
        <Link to="/projects/">My projects</Link>
        <Link to="/team">Team</Link>
      </Navigation>
    </HeaderWrapper>
    <Drawer>
    </Drawer>
  </div>
)

export default Header
