import React from 'react'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

type Props = {}

const SignInPage = async (props: Props) => {
    const providers = await getProviders()

    return (
        <div>
            <div className=' flex justify-center'>
                <Image className=' rounded-full mx-2 object-cover' width={700} height={200}
                    src='https://vectorlogo4u.com/wp-content/uploads/2020/10/Facebook-Messenger-New-Logo-Vector-01.png' alt='Profile Picture' />
            </div>
            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage