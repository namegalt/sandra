import React from 'react'

import {CurrentPost, GridImages} from '../components/components'


function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images/PORTFOLIO/Marie2/', false, /\.(png|jpe?g|svg)$/));


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
