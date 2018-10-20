import React from 'react'
import Link from 'gatsby-link'

import {Page, ImageWrapper, Card, CurrentPost} from '../components/components'

import a1 from '../images/press/press1.jpg'
import a2 from '../images/press/press2.png'
import a3 from '../images/press/press3.png'


const works = [
  {
    image: a1,
    detail: 1,
    text: 'Katsurina Blanket in Vogue UK',
  },
  {
    image: a2,
    detail: 2,
    text: 'Sofia for Shmelevsky Hats',
  },
  {
    image: a3,
    detail: 3,
    text: 'I love you so Sleeper',
  },
]

const ImagesCards = () => (
       <ImageWrapper>
        {works.map((item)=> {
                return (
                  <Link to={`/press${item.detail}`}>
                      <CurrentPost>
                        <img src={item.image}/>
                        <p>{item.text}</p>
                      </CurrentPost>
                </Link>
            )
            })}
            </ImageWrapper>
)

export default ImagesCards
