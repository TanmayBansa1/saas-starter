import React from 'react'
import { SignUp } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
const SignupPage = () => {
  return (
    <SignUp appearance={
      {
        baseTheme: neobrutalism,
      }
    } />
  )
}

export default SignupPage