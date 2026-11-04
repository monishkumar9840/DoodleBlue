import { forwardRef } from 'react';
import '../controls.css';

const Button = forwardRef(function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}, ref) {
  return (
    <button
      ref={ref}
      type={type}
      className={`common-button common-button--${variant} common-button--${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;