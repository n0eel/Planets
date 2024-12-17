"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface CardType {
    img: string
}

const PlanetCard = () => {
    const router = useRouter()
    const path = usePathname()
    const PlanetList = [
        {
            id: 1,
            name: "MOON",
            path: "/moon"
        },
        {
            id: 2,
            name: "MARS",
            path: "/mars"
        },
        {
            id: 3,
            name: "EUROPE",
            path: "/europe"
        },
        {
            id: 4,
            name: "TITAN",
            path: "/titan"
        },
    ]

    return (
        <div className='flex items-center justify-between px-[175px] mt-[76px]'>
            <div className='items-center pr-[206px]'>
                <div className='flex items-center mb-[64px]'>
                    <strong className='text-[28px] text-[gray] pr-[28px]'>01</strong>
                    <h2 className='text-white text-[28px] leading-[33px]'>Pick your destination</h2>
                </div>
                <div>
                    <Image src={"/moon.png"} alt='Moon img' width={445} height={445} />
                </div>
            </div>
            <div>
                <ul className='flex gap-[35px]'>
                    {PlanetList.map(item => (
                        <div key={item.id}>
                        <li onClick={() => router.push(`/destination/${item.path}`)}>
                            <Link className={`${path == item.path ? "border-white border-b-[2px] pb-[12px] text-white" : "text-[#D0D6F9]"}`} href={item.path}>{item.name}</Link>
                        </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PlanetCard