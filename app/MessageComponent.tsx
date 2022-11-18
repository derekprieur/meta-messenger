import Image from 'next/image'
import React from 'react'
import { Message } from '../typings'
import { useSession } from 'next-auth/react'
import TimeAgo from 'react-timeago'

type Props = {
    message: Message,
}

const MessageComponent = ({ message }: Props) => {
    const { data: session } = useSession()
    const isUser = session?.user?.email === message.email

    return (
        <div className={` flex ${isUser ? 'flex-row-reverse ml-auto' : 'flex-row'} space-x-2 w-fit`}>
            <div className=' flex-shrink-0'>
                <Image src={message.profilePic} alt='profile picture' width={50} height={10}
                    className='rounded-full object-cover mx-2' />
            </div>
            <div>
                <p
                    className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? 'text-blue-400 text-right' : ' text-red-400'}`}>
                    {message.username}
                </p>
                <div className={` flex ${isUser ? 'flex-row-reverse' : 'flex-row'} space-x-2 items-end`}>
                    <div
                        className={` px-3 py-2 rounded-lg w-fit text-white 
                        ${isUser ? 'bg-blue-400' : 'bg-red-400'} `}>
                        <p className=' rounded text-sm'>{message.message}</p>
                    </div>
                    <p className=' text-[0.65rem] italic px-2 text-gray-300'>
                        <TimeAgo date={new Date(message.created_at)} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MessageComponent