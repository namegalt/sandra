import React from 'react'
import Link from 'gatsby-link'

import {Page, ImageWrapper, Card, CurrentPost} from '../components/components'

import a1 from '../images/main/1.jpg'
import a2 from '../images/main/2.jpg'
import a3 from '../images/main/3.jpg'
import a4 from '../images/main/4.jpg'
import a5 from '../images/main/5.jpg'
import a6 from '../images/main/6.jpg'
import a7 from '../images/main/7.jpg'
import a8 from '../images/main/8.jpg'
import a9 from '../images/main/9.jpeg'
import a10 from '../images/main/10.jpg'
import a11 from '../images/main/11.jpg'


const works = [
  {
    image: a1,
    detail: 1,
    text: 'Liana',
  },
  {
    image: a2,
    detail: 2,
    text: 'Marie',
  },
  {
    image: a3,
    detail: 3,
    text: '"I love you so" Sleeper',
  },
  {
    image: a4,
    detail: 4,
    text: 'For Sleeper',
  },
  {
    image: a5,
    detail: 5,
    text: 'Masha&Sofi for Katsurina',
  },
  {
    image: a6,
    detail: 6,
    text: 'Madrid, Sofia for Shmelevsky',
  },
  {
    image: a7,
    detail: 7,
    text: 'Madrid, Alba for Ksenia Schnaider',
  },
  {
    image: a8,
    detail: 8,
    text: 'Sofia for Bazuhaus',
  },
  {
    image: a9,
    detail: 9,
    text: 'Breast Cancer Awareness Campaign for Bazuhaus',
  },
  {
    image: a10,
    detail: 10,
    text: 'Anna&Liza FORSEA',
  },
  {
    image: a11,
    detail: 11,
    text: 'Anna',
  }
]

const reversedWorks = works;

const ImagesCards = () => (
       <ImageWrapper>
        {reversedWorks.map((item)=> {
                return (
                  <Link to={`/detail${item.detail}`}>
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
