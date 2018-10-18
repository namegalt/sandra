import React from 'react'

import {FooterWrapper, LongCard} from './components'

import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import telegram from '../images/telegram.svg'

const Contacts = () => (
  <div>
    Написать нам можно по следующим ссылкам:
    <div>
        <a name="contacts" style={{visibility: "hidden"}}/>
    <LongCard>
        <a href="https:www.facebook.com/namegalt" target="_blank"><img src={facebook}></img></a>
        <a href="https:www.instagram.com/namegalt" target="_blank"><img src={instagram}></img></a>
        <a href="https:www.t.me/namegalt" target="_blank"><img src={telegram}></img></a>
        {/* <a href="mailto:namegalt@email.com" target="_blank"><img src={mail}></img></a> */}
    </LongCard>
    </div>
  </div>
)

export default Contacts