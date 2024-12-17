"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const path = usePathname()

  return (
    <div className="flex items-center justify-between mt-[40px] pl-[55px]">
        <Image src={"/logo.svg"} alt="Logo" width={48} height={48}/>
        <ul className="main-header flex text-white text-[16px] space-x-[48px] py-[39px] pl-[123px] pr-[165px] backdrop-blur">
            <li>
                <Link className={`${path == "/" ? "border-b-[3px] border-white pb-[40px]" : ""}`} href={"/"}>00 HOME</Link>
            </li>
            <li>
                <Link className={`${path == "/destination/moon" && "/destination" ? "border-b-[3px] border-white pb-[40px]" : ""}`} href={"/destination"}>01 DESTINATION</Link>
            </li>
            <li>
                <Link className={`${path == "/crew" ? "border-b-[3px] border-white pb-[40px]" : ""}`} href={"/crew"}>02 CREW</Link>
            </li>
            <li>
                <Link className={`${path == "/technology" ? "border-b-[3px] border-white pb-[40px]" : ""}`} href={"/technology"}>03 TECHNOLOGY</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header