import { forwardRef } from 'react';
import '../controls.css';

const Select = forwardRef(function Select({
  children,
  options,
  className = '',
  ...props
}, ref) {
  return (
    <select
      ref={ref}
      className={`common-select ${className}`.trim()}
      {...props}
    >
      {options
        ? options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))
        : children}
    </select>
  );
});

export default Select;