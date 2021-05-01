import React from 'react';
import Message, {MessagePropsType} from "./Message";

const messageData: MessagePropsType = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN346k66MeccjTSvxQM4h9drA-5U11g3as4w&usqp=CAU',
    name: 'Sponge Bob',
    message: 'Have a wonderful day!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
