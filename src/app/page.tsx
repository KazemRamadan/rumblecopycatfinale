import React from 'react'
import Button from '@/components/ui/firstbutton'

const HomePage = () => {
  return (
    <div className="bg-black flex-auto">
      <div className="m-auto" style={{ position: 'relative', zIndex: 1 }}>
    </div>
    <div className=" flex h-screen items-center justify-center mx-auto">
      <Button className='text mx-8' route="/auth">Click Me!</Button>
      </div>
    </div>
  )
}

export default HomePage
