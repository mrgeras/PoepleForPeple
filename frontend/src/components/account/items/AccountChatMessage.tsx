import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from '../../servicesFoMee/types/ChatMessage';
import { RootState } from '../../../store';
import './AccountChatMessage.css';

function AccountChatMessage({
  chatMessage,
  addChatMessage,
}: {
  chatMessage: ChatMessage;
  addChatMessage: (
    bayer_id: number,
    myService_id: number,
    text: string
  ) => void;
}): JSX.Element {
  const [button, setButton] = useState(true);
  const [text, setText] = useState('');

  const { user } = useSelector((store: RootState) => store.auth);

  //  console.log(chatMessage)

  return (
    <div className="form-container">
      {' '}
      <form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault();
          addChatMessage(chatMessage.bayer_id, chatMessage.myService_id, text);
          setButton(true);
          //setText('');
        }}
      >
        <ul className="message-list"> </ul>
        <div style={{ borderStyle: 'solid', borderColor: 'green' }}>
          <div>
            <p>{`${chatMessage.createdAt}`}</p>
            {user && user.id !== chatMessage.User.id ? (
              <p>{`Сообщение от : ${chatMessage.User.name}`}</p>
            ) : (
              <p style={{ color: 'red' }}>Сообщение от вас :</p>
            )}
            <p>{`${chatMessage.text}`}</p>
          </div>
        </div>
        <input
          className="message-input"
          placeholder="Type your message here"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="send-button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default AccountChatMessage;
