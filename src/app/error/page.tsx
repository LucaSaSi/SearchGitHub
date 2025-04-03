import React from 'react'

export default function ErrorPage() {
    return (
        <div className='text-lg text-center font-semibold w-1/2 text-red-500 bg-gray-300 rounded-lg p-3'>
            <p>
                Nenhum perfil foi encontrado com esse nome de usuário. <br /> Tente novamente com outro nome.
            </p>
        </div>
    )
}
