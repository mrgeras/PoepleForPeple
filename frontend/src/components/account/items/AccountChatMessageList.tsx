import React from "react";
import ChatMessageItem from "../../servicesFoMee/items/ChatMessage";
import { ChatMessage } from "../../servicesFoMee/types/ChatMessage";

function AccountChatMessageList ({chatMessages}: {chatMessages: ChatMessage[]}): JSX.Element {
    return (
        <div>
{chatMessages.map( (chatMessage) => <ChatMessageItem key={chatMessage.id} chatMessage={chatMessage}/>)}
        </div>
    )
}

export default AccountChatMessageList;