import React, { useState, useEffect } from 'react';

import { View, ScrollView } from 'react-native';

import { styles } from './styles';

import { io } from "socket.io-client";

//Components
import { Message, MessageProps } from '../Message';
import { api } from '../../services/api';


const socket = io(String(api.defaults.baseURL));

let messagesQueue: MessageProps[] = [];

socket.on('new_message', (newMessage) => {
     messagesQueue.push(newMessage);
})

export function MessageList() {
     const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

     useEffect(() => {
          async function fetchMessages() {
               const messagesResponse = await api.get('/messages/last3');
               setCurrentMessages(messagesResponse.data);
          }

          fetchMessages();
     }, [])

     useEffect(() => {
          const time = setInterval(() => {
               if (messagesQueue.length > 0) {
                    setCurrentMessages(prevState => [
                         messagesQueue[0],
                         prevState[0],
                         prevState[1]
                    ]

                    );
                    messagesQueue.shift();
               }

               return () => clearInterval(time);
          }, 1500)
     }, [])

     return (
          <ScrollView style={styles.container}
               contentContainerStyle={styles.content}
               keyboardShouldPersistTaps="never"
          >
               {currentMessages.map(message => {
                    return (
                         <Message data={message} key={message.id} />
                    )
               })}

          </ScrollView>
     );
}