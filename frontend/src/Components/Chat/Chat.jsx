import React from 'react'
import './Chat.css'


const Chat = () => {
  return (
    <div className='chat'>


      

      <div className='chat-box-1'>
          
          <div className='chat-search' >
        <input type="search"  placeholder='Search'/>
          </div>

          <div className='user-box'>

          </div>

      </div>


      <div className='chat-box-2'>


            <div className='chating-profile'>

            </div>
        <div className='chating-box'>

        </div>

      </div>
    </div>
  )
}

export default Chat
