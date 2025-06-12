import type { BaseEntity } from './common';

export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  BROKER: 'broker'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface User extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  preferences: {
    currency: string;
    notifications: boolean;
  };
}

export interface UserProfile {
  user: User;
  isAuthenticated: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
