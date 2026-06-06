import React, { forwardRef } from 'react';
import { designTokens } from './tokens';

// Button Variants
const buttonVariants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500',
  secondary: 'bg-transparent hover:bg-primary-500 text-primary-500 hover:text-white border-primary-500',
  outline: 'bg-transparent hover:bg-neutral-50 text-neutral-900 border-neutral-300 hover:border-neutral-400',
  ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700 border-transparent',
  danger: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    border transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantClasses = buttonVariants[variant] || buttonVariants.primary;
  const sizeClasses = buttonSizes[size] || buttonSizes.md;

  return (
    <button
      ref={ref}
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {leftIcon && !loading && leftIcon}
      {children}
      {rightIcon && !loading && rightIcon}
    </button>
  );
});

Button.displayName = 'Button';

// Card Component
export const Card = forwardRef(({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  ...props
}, ref) => {
  const variants = {
    default: 'bg-white border border-neutral-200 shadow-md',
    glass: 'bg-white/25 border border-white/25 backdrop-blur-md shadow-glass',
    elevated: 'bg-white border border-neutral-200 shadow-xl',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div
      ref={ref}
      className={`
        rounded-xl transition-all duration-200
        ${variants[variant]} ${paddings[padding]} ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Input Component
export const Input = forwardRef(({
  type = 'text',
  label,
  error,
  helpText,
  className = '',
  fullWidth = true,
  size = 'md',
  variant = 'default',
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const variants = {
    default: 'border-neutral-300 focus:border-primary-500',
    filled: 'bg-neutral-100 border-transparent focus:border-primary-500',
    glass: 'bg-white/25 border-white/25 backdrop-blur-sm focus:border-primary-500',
  };

  const inputClasses = `
    ${fullWidth ? 'w-full' : ''}
    ${sizes[size]}
    ${variants[variant]}
    ${error ? 'border-red-500 focus:border-red-500' : ''}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
    rounded-lg border transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500/20
    disabled:opacity-50 disabled:cursor-not-allowed
    placeholder:text-neutral-400
  `;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`${inputClasses} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helpText && !error && (
        <p className="mt-1 text-sm text-neutral-500">{helpText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Textarea Component
export const Textarea = forwardRef(({
  label,
  error,
  helpText,
  className = '',
  fullWidth = true,
  variant = 'default',
  rows = 4,
  ...props
}, ref) => {
  const variants = {
    default: 'border-neutral-300 focus:border-primary-500',
    filled: 'bg-neutral-100 border-transparent focus:border-primary-500',
    glass: 'bg-white/25 border-white/25 backdrop-blur-sm focus:border-primary-500',
  };

  const textareaClasses = `
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant]}
    ${error ? 'border-red-500 focus:border-red-500' : ''}
    px-4 py-3 rounded-lg border transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500/20
    disabled:opacity-50 disabled:cursor-not-allowed
    placeholder:text-neutral-400 resize-none
  `;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${textareaClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helpText && !error && (
        <p className="mt-1 text-sm text-neutral-500">{helpText}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// Badge Component
export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-neutral-100 text-neutral-800',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

// Container Component
export const Container = ({
  children,
  size = 'default',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`
        ${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Stack Component (Flexbox utility)
export const Stack = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
  ...props
}) => {
  const directions = {
    vertical: 'flex-col',
    horizontal: 'flex-row',
  };

  const spacings = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifications = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  return (
    <div
      className={`
        flex ${directions[direction]} ${spacings[spacing]}
        ${alignments[align]} ${justifications[justify]}
        ${wrap ? 'flex-wrap' : ''} ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default {
  Button,
  Card,
  Input,
  Textarea,
  Badge,
  Container,
  Stack,
};