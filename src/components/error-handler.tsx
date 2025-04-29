"use client";

import { useEffect } from 'react';
import { toast } from 'sonner';

interface ErrorHandlerProps {
  error: string | Error;
  title?: string;
  description?: string;
}

export function ErrorHandler({ 
  error, 
  title = "Something went wrong", 
  description = "Please try again later" 
}: ErrorHandlerProps) {
  useEffect(() => {
    toast.error(title, {
      description,
    });
  }, [error, title, description]);

  return null;
} 