import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div>AHhh Great you found it, now go back to <Link href={'/'}><span className='underline hover:cursor-pointer'>Home</span></Link> page</div>
  )
}

export default Index