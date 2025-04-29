'use client'
import { AuthModal } from '@/components/auth/auth-modal';
import { useParams, useRouter } from 'next/navigation';

import React from 'react'


const AuthPage = () => {
    const params = useParams();
    const type = params?.type as "sign-in" | "sign-up" | "sync";
    const router = useRouter();
    return (
        <AuthModal isOpen={true} onClose={()=>{
            router.push('/')
        }} defaultView={type}>
        </AuthModal>
    )
}
export default AuthPage