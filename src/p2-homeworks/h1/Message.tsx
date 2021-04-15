import React from 'react'
import s from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.emptyAboveAvatar}></div>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/></div>
            <div className={s.message_body_container}>
                <span className={s.triangle}></span>
                        <div className={s.name}>{props.name}<br/></div>
                        <div className={s.messageText}>{props.message}<br/></div>
                        <div className={s.time}>{props.time}<br/></div>
            </div>
        </div>
    )
}

export default Message
