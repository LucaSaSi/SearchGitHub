'use client'
import Image from 'next/image';

const imageStyle = {
    borderRadius: '50%',
    border: '2px solid blue',
}
type UserProps = {
    name: string;
    avatar: string;
    bio: string;
}

export default function User({ name, avatar, bio }: UserProps) {


    return (

        <div className='flex  justify-around items-center h-full w-1/2 rounded-xl p-4 border-2 border-blue-700 bg-gray-300'>
            <Image
                src={avatar}
                alt={avatar}
                width={250}
                height={230}
                style={imageStyle}
            />
            <div className='flex flex-col w-1/2 items-left pl-6 gap-4'>
                <h1 className='w-full font-semibold text-xl text-blue-500'>{name}</h1>
                <p className='flex text-left items-start text-black font-light'>
                    {bio && bio.length > 0 ? bio : "Esse usuário não possui uma biografia."}
                </p>
            </div>
        </div>
    )
}
