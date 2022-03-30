import React from 'react'
import store_home_share from '../assets/store_home_share.jpg'
const Image = () => {
  return (
    <div >
        <img src={store_home_share} alt="steam" style={{display: "flex", backgroundPosition: "absolute", zIndex: 1, width: "100%", height: "100%"}}/>
        </div>
  )
}

export default Image