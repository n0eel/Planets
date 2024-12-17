"use client"

import PlanetCard from "@/app/components/PlanetCard"
import { useParams } from "next/navigation"

const PlanetInfo = () => {
    const { id } = useParams()

    return (
        <>
        <div>
            <div className='mt-[37px] w-[445px]'>
            <h1 className='text-white text-[100px] mb-[14px] uppercase'>{id}</h1>
            <p className='text-[18px] text-[#D0D6F9] pb-[54px] border-b-[1px] border-[#383B4B]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className='flex mt-[28px]  space-x-[79px]'>
                <div className='flex flex-col space-y-[12px]'>
                    <span className='text-[#D0D6F9]'>AVG. DISTANCE</span>
                    <strong className='text-white text-[28px]'>384,400 km</strong>
                </div>
                <div className='flex flex-col space-y-[12px]'>
                    <span className='text-[#D0D6F9]'>Est. travel time</span>
                    <strong className='text-white text-[28px]'>3 days</strong>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default PlanetInfo