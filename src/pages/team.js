import React from 'react'
import Link from 'gatsby-link'
import {CardWrapper, Card, Team} from '../components/components'

import alex from '../images/Aleksandra.jpg'
import julia from '../images/Julia.jpg'
import kristina from '../images/Kristina.jpg'
import sandra from '../images/Sandra.jpg'

import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import telegram from '../images/telegram.svg'

const team = [
    {
    name: "Sandra Vovk",
    position: "разработчик",
    nick: "где, *****, фото?",
    inst: "https://www.instagram.com/namegalt",
    fb: "https://www.facebook.com/namegalt",
    telegram: "https://www.t.me/namegalt",
    img: sandra
    },
    {
    name: "Kristina Yesipchuk",
    position: "UI/UX дизайнер",
    nick: "девачка-космос",
    inst: "https://www.instagram.com/karinaostd",
    fb: "https://www.facebook.com/namegalt",
    img: kristina
    },
    {
    name: "Aleksandra Illina",
    position: "фотограф/менеджер",
    nick: "милашка",
    inst: "https://www.instagram.com/san_dora_/",
    fb: "https://www.facebook.com/sandravovk0?ref=br_rs",
    img: alex
    },
    {
        name: "Julia Slipchenko",
        position: "фотограф/менеджер",
        nick: "милашка",
        inst: "https://www.instagram.com/san_dora_/",
        fb: "https://www.facebook.com/sandravovk0?ref=br_rs",
        img: julia
        },

]

function TeamCard() {
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
                    {/* <h6>{item.position}</h6>
                    <p>{item.nick}</p> */}
                </Card>
            )
            })}
        </CardWrapper>
        </Team>
    )
  }

export default TeamCard