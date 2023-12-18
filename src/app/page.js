'use client'
import Image from 'next/image'
import {useSelector, Provider, useDispatch} from 'react-redux'
import { userLogin } from '../redux/userSlice'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Home() {

const dispatch = useDispatch()
 const {name , role , promissions } = useSelector(state => state.user)

//  useEffect(() => {
//  // dispatch(userLo)
//  },[name])
  
const handleClick = () => {
  dispatch(userLogin({
    name:"Arif",
    role:"Editor",
    permission:['reate','edit','delete']
  }))
}

  return (
 
      <main className="flex h-screen justify-center items-center p-10 ">
        <div className='flex mx-auto h-48'>
      
      <div>
      <button className='bg-red-400 p-4 m-4' onClick={handleClick}>Login</button>
      </div>
      
      <Link href='/profile'>
        <button className='bg-blue-400 p-4 m-4'>Profile</button>
      </Link>
      
        </div>
    </main>

  )
}
