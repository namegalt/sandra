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
    position: "Creator",
    img: sandra
    },
    {
    name: "Julia Slipchenko",
    position: "Photographer",
    img: julia
    },
    {
    name: "Aleksandra Illina",
    position: "Сommunication Director",
    img: alex
    },
    {
    name: "Kristina Yesipchuk",
    position: "Producer",
    img: kristina
    },
]

function TeamCard() {
    return (
        <Team>
            <a name="team" style={{visibility: "hidden"}}/>
            <h4>Team</h4>
        <CardWrapper>
            {team.map((item)=> {
                return (
                <Card>
                    <div style={{background: "url(" + item.img + ")", backgroundSize: "cover", backgroundPositionY: "20%"}}/>
                    <h3>{item.name}</h3>
                    <h6>{item.position}</h6>
                </Card>
            )
            })}
        </CardWrapper>
        </Team>
    )
  }

export default TeamCard