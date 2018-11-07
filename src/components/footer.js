import React from 'react'

import {FooterWrapper, SocialWrapper} from './components'

import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import telegram from '../images/telegram.svg'
// import mail from '../images/mail.svg'

const Footer = () => (
    <FooterWrapper>
        <a href="mailto:aaleksandravovk@gmail.com">aaleksandravovk@gmail.com</a>
        <a name="contacts" style={{visibility: "hidden"}}/>
    <SocialWrapper>
        <a href="https:www.facebook.com/profile.php?id=100006372695194" target="_blank"><img src={facebook}></img></a>
        <a href="https:www.instagram.com/san_dora_" target="_blank"><img src={instagram}></img></a>
        <a href="https:www.t.me/sandravovk" target="_blank"><img src={telegram}></img></a>
        {/* <a href="mailto:namegalt@email.com" target="_blank"><img src={mail}></img></a> */}
    </SocialWrapper>
    </FooterWrapper>
)

export default Footer