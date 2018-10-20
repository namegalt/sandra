import React from 'react'

import {CurrentPost, GridImages} from '../components/components'

// const location = window.location.href;
// console.log(location)

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images/PORTFOLIO/IloveyousoSleeper3/', false, /\.(png|jpe?g|svg)$/));


const Detail = (props) => (
  <GridImages>
   
    {images.map((item)=> {
          return (
            <CurrentPost>
              <img src={item}/>
            </CurrentPost>
      ) 
        })}
        {console.log(props.location)}
  </GridImages>
)

export default Detail
