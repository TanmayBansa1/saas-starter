"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Loader2 } from 'lucide-react'
import { syncUser } from '@/lib/actions/sync'
import { ErrorHandler } from '../error-handler'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SyncModal = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSync = async () => {
      try {
        await syncUser();
        router.push('/dashboard');
      } catch (error) {
        const safeError = error instanceof Error ? error : new Error("Failed to sync user");
        return <ErrorHandler 
          error={safeError} 
          title="Sync Failed" 
          description="We couldn't sync your account. Please try again later." 
        />;
      }
    };

    void handleSync();
  }, [router]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Syncing Your Account
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="text-center text-muted-foreground">
          Please wait while we sync your account...
        </p>
      </CardContent>
    </Card>
  )
}

export default SyncModal