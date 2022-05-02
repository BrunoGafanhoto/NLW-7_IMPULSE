import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import io from "socket.io-client";


import logoImg from "../../assets/logo.svg"

type Message = {
    id: string;
    text: string;
    user: {
        name: string,
        avatar_url: string
    }
}


const messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");
socket.on('new_message', (newMessage: Message) => {
    messagesQueue.push(newMessage);
})

export const MessageList = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if(messagesQueue.length > 0){
                setMessages(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1]
                ].filter(Boolean)) //Remove valores falsos ex: null, undefined
                messagesQueue.shift();
            }
        }, 3000)
    }, [])

    useEffect(() => {
        api.get<Message[]>("messages/last3").then(response => {
            setMessages(response.data);
        })

    }, [messages])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                {messages.map((item, index) => {
                    return(
                        <li className={styles.message} key={item.id}>
                        <p className={styles.messageContent}>
                          {item.text}
                        </p>
                        <div className={styles.messageUser}>
                            <span>{item.user.name}</span>
                            <div className={styles.userImage}>
                                <img src={item.user.avatar_url} alt="Foto de perfil" />
                            </div>
                        </div>
                    </li>
                    )
                })}
               
            </ul>
        </div>
    )
}