import React from 'react'
import Link from 'gatsby-link'

import {Page, ImageWrapper, Card, CurrentPost, GridImages} from '../components/components'

// import alex from '../images/alex.jpg'
import a1 from '../images/01/1.jpg'
import a2 from '../images/01/2.jpg'
import a3 from '../images/01/3.jpg'
import a4 from '../images/01/4.jpg'
import a5 from '../images/01/5.jpg'
import a6 from '../images/01/6.jpg'
import a7 from '../images/01/7.jpg'
import a8 from '../images/01/8.jpg'
import a9 from '../images/01/9.jpg'
import a10 from '../images/01/10.jpg'
import a11 from '../images/01/11.jpg'


const works = [
  {
    images: a1,
    detail: 1
  },
  {
    images: a2,
    detail: 2
  },
  {
    images: a3,
    detail: 3
  },
  {
    images: a4,
    detail: 4
  },
  {
    images: a5,
    detail: 5
  },
  {
    images: a6,
    detail: 6
  }
]

const Detail = () => (
  <GridImages>
        {works.map((item)=> {
                return (
                  
                      <CurrentPost>
                        <img src={item.images}/>
                      </CurrentPost>

            ) 
            })}
                  </GridImages>
)

export default Detail
