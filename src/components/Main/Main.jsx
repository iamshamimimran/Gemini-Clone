import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const main = () => {
  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="User" />
        </div>

        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can i help you today ?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
              <img src={assets.compass_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
              <img src={assets.bulb_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
              <img src={assets.message_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
              <img src={assets.code_icon} alt="cmps" />
            </div>
          </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img src={assets.send_icon} alt="Send" />
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>

        </div>
    </div>
  )
}

export default main