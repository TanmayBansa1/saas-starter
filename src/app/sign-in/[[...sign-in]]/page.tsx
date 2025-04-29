import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { neobrutalism } from '@clerk/themes'
const SigninPage = () => {
  return (
    <SignIn appearance={
      {
        baseTheme: neobrutalism,
      }
    } />  
  )
}

export default SigninPage