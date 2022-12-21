import React from 'react'
import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import { BsFillEmojiSmileFill } from 'react-icons/bs'

function Chat({socket, username, room,}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);


    console.log(socket.id)


    

             
   


    const sendMessage = async () => {
        if(currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("")
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket]);

  return ( 
  <div className="chat-window">
    <div className="chat-header">
        <div className="profilePic"></div>
        <div className='supportInfo__wrapper'>
            <p className='chattingWith'>Chatting with</p>

       
            <div className='support__wrapper'><p className='support__name'>offline</p> <div className={username === 2 ? "support__status online" : "support__status offline"}></div>  </div>
            
        </div>
    </div>
    <div className="chat-body">
        <ScrollToBottom className='message-container'>
        {messageList.map((messageContent) => {
            return ( 
            <div className='message' id={username === messageContent.author ? "you" : "other"}>
                <div className='message-content'>
                    <p>{messageContent.message}</p>
                </div>
                <div className='message-meta'>
                <p id='time'>{messageContent.time}</p>
                <p id='author'>{messageContent.author}</p>
                
                </div>
            </div>
            )
        })}
        </ScrollToBottom>
    </div>
    <div className="chat-footer">
        <div className="emoji__wrapper">
    <input 
    type="text" 
    value={currentMessage}
    placeholder='Write a message...'
    onChange={(event) => {
        setCurrentMessage(event.target.value)
      }}
      onKeyPress={(event) => {
        event.key === "Enter" && sendMessage()
    }}
    />
        <button><BsFillEmojiSmileFill className='emoji'/></button>
        </div>
        <button className='send' onClick={sendMessage}>Send</button>
    </div>
  </div>
  )
}

export default Chat