import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const sidebar = () => {

const [extended, setExtended]=useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="Menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus" />
                {extended?<p>New Chat</p>:null}
            </div>

                {extended? 

            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-enrty">
                    <img src={assets.message_icon} alt="Massage" />
                    <p>What is React ...</p>
                </div>
            </div>:null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-enrty">
                <img src={assets.question_icon} alt="Q" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-enrty">
                <img src={assets.history_icon} alt="history" />
                {extended?<p>Activity</p>:null}
            </div><div className="bottom-item recent-enrty">
                <img src={assets.setting_icon} alt="Settings" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default sidebar