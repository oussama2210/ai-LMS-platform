import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './navitems'
const navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image src="images/logo.svg" alt="Logo" width={46} height={44} />
                    <span className='font-bold text-xl'>AI LMS</span>
                </div>


            </Link>

            <div className='flex items-center gap-8'>
                <NavItems />


            </div>

        </nav>
    )
}

export default navbar