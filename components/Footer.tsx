import React from 'react'
import { footerList1,footerList2, footerList3 } from '../utils/constants'

const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
<div className='flex flex-wrap gap-2 mt-5'>
{footerList1.map((item)=>(
    <p key={item} className="text-gray-400 cursor-pointer text-sm  hover:underline ">
        {item}
    </p>
))}
</div>
    </div>
  )
}

export default Footer