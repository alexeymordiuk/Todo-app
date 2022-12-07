import React from 'react'

type layout = {
    children: React.ReactNode;
}

const Layout: React.FC<layout> = ({children}) => {
  return (
    <div className='py-10 bg-white h-screen'>{children}</div>
  )
}

export default Layout