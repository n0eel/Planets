import React from 'react'

const MainCard = () => {
    return (
        <div className="flex items-center justify-between mx-[165px]">
            <div className="w-[450px] space-y-[24px] mt-[251px]">
                <h2 className="text-[28px] leading-[33px] text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className="text-[150px] leading-[171px] text-white">SPACE</h1>
                <p className="text-[18px] leading-[32px] text-[#D0D6F9]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="bg-white rounded-full px-[63px] py-[110px] mt-[359px]">
                <h4 className="text-[#0B0D17] text-[32px]">EXPLORE</h4>
            </div>
        </div>
    )
}

export default MainCard