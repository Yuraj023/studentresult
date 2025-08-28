'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@/lib/types';

const USER_STORAGE_KEY = 'campus-connect-user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client
    try {
      const userJson = sessionStorage.getItem(USER_STORAGE_KEY);
      if (userJson) {
        setUser(JSON.parse(userJson));
      }
    } catch (error) {
      console.error('Failed to parse user from sessionStorage', error);
      sessionStorage.removeItem(USER_STORAGE_KEY);
    }
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(USER_STORAGE_KEY);
    setUser(null);
    router.push('/');
  }, [router]);

  return { user, isLoading, logout };
}
