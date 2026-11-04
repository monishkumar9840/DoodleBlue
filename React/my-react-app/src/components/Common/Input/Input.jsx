import { forwardRef } from 'react';
import '../controls.css';

const Input = forwardRef(function Input({
  className = '',
  type = 'text',
  ...props
}, ref) {
  const isChoice = type === 'checkbox' || type === 'radio';

  return (
    <input
      ref={ref}
      type={type}
      className={`${isChoice ? 'common-input-choice' : 'common-input'} ${className}`.trim()}
      {...props}
    />
  );
});

export default Input;