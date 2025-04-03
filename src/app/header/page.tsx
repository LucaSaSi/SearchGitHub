import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
    return (
        <div className='flex p-20 justify-center-safe items-center m-0 gap-2'>
            <GitHubIcon fontSize="large" />
            <p className='text-5xl font-semibold'>Perfil</p>
            <p className='text-5xl font-bold'>GitHub</p>
        </div>
    )
}
