import { Breadcrumbs, Button, Link } from 'bold-ui'
import React from 'react'

export const Breadcrumb = () => {
  
  const onLogout = () => {
    console.log('logout');
  }
  
  return (
    <Breadcrumbs>
      <Link color='inherit' textDecoration='none' href='/'>
        Casas
      </Link>
      <Link color='inherit' textDecoration='none' href='/stark/'>
        Casa Stark
      </Link>
      <Link color='inherit' textDecoration='none' href='/lannister/'>
        Casa Lannister
      </Link>
      {/* <Link color='inherit' textDecoration='none' href='/login/'>
        Logout
      </Link> */}
      {/* <Button onClick= {onLogout} kind="primary">
        Logout
      </Button> */}
    </Breadcrumbs>
  )
}

