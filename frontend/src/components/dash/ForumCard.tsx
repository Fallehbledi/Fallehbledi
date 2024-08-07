import { MdOutlineForum } from "react-icons/md";
import Link from 'next/link'


const ExpertCard = () => {
  return (
    <div className=" max-w-sm p-4 bg-white">
    <MdOutlineForum className="w-7 h-7 mb-2 text-[#058f1a]" />
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Join Our Community</h5>
    </a>
    <p className="mb-3  font-normal text-gray-900 ">Be a part of something bigger. Join our community today and start collaborating, learning, and growing together!</p>
    <Link href="/community" className="inline-flex font-medium items-center text-[#058f1a] hover:underline">
        Explore Community
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </Link>
</div>
  )
}

export default ExpertCard