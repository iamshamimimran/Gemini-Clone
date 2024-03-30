import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const main = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
} =useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="User" />
        </div>

        <div className="main-container">

          {!showResult
          ?
          <>
                 <div className="greet">
            <p><span>Hello, Buddy.</span></p>
            <p>How can i help you today ?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
              <img src={assets.compass_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Help me understand American football</p>
              <img src={assets.bulb_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Evaluate and rank common camera categories</p>
              <img src={assets.message_icon} alt="cmps" />
            </div>
            <div className="card">
              <p>Outline a way to home routine: organizing my closet</p>
              <img src={assets.code_icon} alt="cmps" />
            </div>
          </div>
          </>
          :<div className='result'>
                <div className="result-title">
                  <img src={assets.user_icon} alt="" />
                  <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />

                  {loading
                  ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />

                  </div>
                  :
                  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  }

                </div>
          </div>
          }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
             {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="Send" />:null} 
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Made with &#128158; by <a style={{textDecoration:"none"}} href="http://shamimimran.netlify.app/">Shamim Imran</a>
          </p>
        </div>

        </div>
    </div>
  )
}

export default main