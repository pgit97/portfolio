import React from 'react'

export default function Footer() {
    return (
        <>
           
                <div className='py-1 border bg-gray-100 flex justify-between px-48'>
                    <div className=''>
                        <p>@2024 Priti Gupta. All Right Reserved</p>
                    </div>
                    <div className='space-x-4'>
                        <a href='/about'  className='hover:underline'>About</a>
                        <a href='/privacy' className='hover:underline'>Privacy</a>
                        <a href='/contact' className='hover:underline'>Contact</a>
                    </div>
                </div>
            
        </>
    )
}
