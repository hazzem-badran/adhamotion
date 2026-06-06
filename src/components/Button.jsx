import React from "react";
import { useNavigate } from "react-router-dom";
import { Button as DSButton } from "../design-system/components";

const Button = ({ 
  stylee, 
  variant,
  size = 'md',
  type = "button", 
  children, 
  navigateTo, 
  onClick,
  disabled = false,
  loading = false,
  className = "",
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}) => {
  const navigate = useNavigate();

  // Map old stylee prop to new variant system
  const getVariant = () => {
    if (variant) return variant;
    if (stylee === 'btn__primary') return 'primary';
    if (stylee === 'btn__secondary') return 'secondary';
    return 'primary';
  };

  const handleClick = (event) => {
    if (disabled || loading) return;
    
    if (onClick) {
      onClick(event);
    }
    
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <DSButton
      type={type}
      variant={getVariant()}
      size={size}
      onClick={handleClick}
      disabled={disabled}
      loading={loading}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      fullWidth={fullWidth}
      className={`${stylee || ''} ${className}`}
      {...props}
    >
      {children}
    </DSButton>
  );
};

export default Button;