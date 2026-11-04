import { forwardRef } from 'react';
import '../controls.css';

const TextArea = forwardRef(function TextArea({
  className = '',
  rows = 4,
  ...props
}, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`common-textarea ${className}`.trim()}
      {...props}
    />
  );
});

export default TextArea;
