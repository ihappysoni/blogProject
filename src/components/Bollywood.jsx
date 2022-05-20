import React, { useContext } from 'react'
import {happy} from './Api'
const Bollywood = () => {
    const [data,setData]=useContext(happy)
    
  return (
    <div>
    
      {data.map(item=><img src={item.ImageAsset} alt='BollyImg'/>)}
    </div>
  )
}

export default Bollywood
