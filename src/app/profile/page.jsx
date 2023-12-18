'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link'

export default function page() {

    const {name, role , permission} = useSelector (state => state.user.userinfo)
  return (
    <div className='h-screen mx-auto'>
        <Link href='/'>
        <button className='bg-yellow-400 p-4'>Home</button>
        </Link>
        <h2 className='text-blue-400 text-4xl '>Profile page</h2>
        <p>{name}</p>
        <p>{role}</p>
       <div className="flex space-x-6">
       {permission?.map(item => (
            <span>{item}</span>
        ))}
       </div>
    </div>
  )
}
