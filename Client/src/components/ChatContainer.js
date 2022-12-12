import ChatHeader from './ChatHeader'
import ChatDisplay from './ChatDisplay'
import MatchesDisplay from './MatchesDisplay'
import { useState } from 'react'

const ChatContainer = () => {
    return (
    <div className="chat-container">
        <ChatHeader/>

        <div className='options-container'>
            <button className="option">Matches</button>
            <button className="option">Chat</button>
        </div>

        <MatchesDisplay/>

        <ChatDisplay/>

    </div>)
}

export default ChatContainer