import { ReactNode } from 'react';

// For Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For routing in index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// Layout Props
export interface LayoutProps {
  children: ReactNode;
}