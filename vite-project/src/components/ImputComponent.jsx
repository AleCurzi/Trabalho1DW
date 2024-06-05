import React from 'react';

export function InputComponent({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
};
