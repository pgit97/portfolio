import React, { useState } from 'react'

export default function Header() {
    const [brandName, setBrandName] = useState("Priti Gupta")
    const [menulinks, setMenuLinks] = useState([
        {
            key: 1,
            menu: 'Home',
            link: './home'
        },
        {
            key: 2,
            menu: 'About',
            link: './about'
        },
        {
            key: 3,
            menu: 'Skills',
            link: './skills'
        },
        {
            key: 4,
            menu: 'Portfolio',
            link: './portfolio'
        },
        {
            key: 5,
            menu: 'Contacts',
            link: './contacts'
        }
    ])
    return (
        <>
            <div className='h-16 items-center px-16 border flex justify-between bg-gray-100'>
                <div> {/*brand logo*/}
                    <h1 className='text-2xl font-bold'>{brandName}</h1>
                </div>

                <div className='space-x-3'>{/*menu links*/}
                    {menulinks.map((links) => (
                        <a key={links.key} href={links.link} className='hover:text-orange-600'>{links.menu}</a>
                    ))}
                    { /*
        <a href='/home' className='hover:text-orange-600'>Home</a>
        <a href='/about' className='hover:text-orange-600'>About</a>
        <a href='skills' className='hover:text-orange-600'>Skills</a>
        <a href='/portfolio' className='hover:text-orange-600'>Portfolio</a>
        <a href='/contact' className='hover:text-orange-600'>Contacts</a>
        */}

                </div>
                <div>{/*links*/}
                    <button className='px-4 py-2 bg-orange-500 rounded-full shadow-sm text-1xl  '>Hire Me</button>
                </div>
            </div>
        </>
    )
}
