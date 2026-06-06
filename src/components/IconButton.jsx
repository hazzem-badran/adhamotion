import React from 'react';
import { Button } from '../design-system/components';

const IconButton = ({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <Button
      variant={variant}
      className={`
        ${sizeClasses[size]} p-0 rounded-full
        ${className}
      `}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </Button>
  );
};

export default IconButton;