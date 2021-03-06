import React from 'react'

import {CurrentPost, GridImages} from '../components/components'

// const location = window.location.href;
// console.log(location)

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images/PORTFOLIO/MadridAlbaforKseniaKseniaSchnaider7/', false, /\.(png|jpe?g|svg)$/));

const reversedImages = images

const Detail = (props) => (
  <GridImages>
   
    {images.map((item)=> {
          return (
              <img src={item}/>
      ) 
        })}
  </GridImages>
)

export default Detail
