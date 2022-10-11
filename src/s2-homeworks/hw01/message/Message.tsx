import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

export type MessagePropsType = {
    message: {
        id: number,
        user: {
            avatar: string, // можно менять
            name: string,  // можно менять
        },
        message: {
            text: string, // можно менять
            time: string, // можно менять
        },
    }
}

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    className={s.message_img} src={props.message.user.avatar} alt="avatar"
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <span>{props.message.user.name}</span>
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <p>{props.message.message.text}</p>
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <span>{props.message.message.time}</span>
            </div>
        </div>
    )
}

export default Message
