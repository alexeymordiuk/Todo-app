import React from 'react'
import { Inner } from '../style-components/Layout';

type layout = {
    children: React.ReactNode;
}

const Layout: React.FC<layout> = ({children}) => {
  return (
    <Inner>{children}</Inner>
  )
}

export default Layout