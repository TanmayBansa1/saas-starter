import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-bl from-amber-100 to-amber-50'>
            <div className='flex items-center justify-evenly pt-20'>

                <h1 className='text-2xl'> DashBoard </h1>
                <UserButton></UserButton>
            </div>
        </div>
    )
}

export default Dashboard