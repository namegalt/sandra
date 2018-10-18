import React from 'react'
import Link from 'gatsby-link'
import {CardWrapper, Card, Social, Team} from '../components/components'

import alex from '../images/alex.jpg'
import karina from '../images/karina.jpg'
import bohdan from '../images/bohdan.jpg'

import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import telegram from '../images/telegram.svg'

const team = [
    {
    name: "Богдан Галт",
    position: "разработчик",
    nick: "где, *****, фото?",
    inst: "https://www.instagram.com/namegalt",
    fb: "https://www.facebook.com/namegalt",
    telegram: "https://www.t.me/namegalt",
    img: bohdan
    },
    {
    name: "Карина Гончарова",
    position: "UI/UX дизайнер",
    nick: "девачка-космос",
    inst: "https://www.instagram.com/karinaostd",
    fb: "https://www.facebook.com/namegalt",
    img: karina
    },
    {
    name: "Саша Волк",
    position: "фотограф/менеджер",
    nick: "милашка",
    inst: "https://www.instagram.com/san_dora_/",
    fb: "https://www.facebook.com/sandravovk0?ref=br_rs",
    img: alex
    },
    {
        name: "Саша Волк",
        position: "фотограф/менеджер",
        nick: "милашка",
        inst: "https://www.instagram.com/san_dora_/",
        fb: "https://www.facebook.com/sandravovk0?ref=br_rs",
        img: alex
        },

]

function TeamCard(props) {
    return (
        <Team>
            <a name="team" style={{visibility: "hidden"}}/>
            <h4>My dream team</h4>
        <CardWrapper>
            {team.map((item)=> {
                return (
                <Card>
                    <img src={item.img}/>
                    <h3>{item.name}</h3>
                    <h6>{item.position}</h6>
                    <p>{item.nick}</p>
                    {/* <Social>
                        <a href={item.inst} target="_blank"><img src={instagram}></img></a>
                        <a href={item.fb} target="_blank"><img src={facebook}></img></a>
                        {item.telegram ? (
                            <a href={item.telegram} target="_blank"><img src={telegram}></img></a>
                        ):(
                            null
                        )}
                    </Social> */}
                </Card>
            )
            })}
        </CardWrapper>
        </Team>
    )
  }

export default TeamCard