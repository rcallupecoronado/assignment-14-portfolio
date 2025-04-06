import React from 'react';

export interface CardProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  children?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
  textColor?: string;
}
