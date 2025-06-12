import type { BaseEntity } from './common';

export interface User extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  preferences: {
    currency: string;
    notifications: boolean;
  };
}

export interface UserProfile {
  user: User;
  isAuthenticated: boolean;
}
