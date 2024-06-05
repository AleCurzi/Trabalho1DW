import React, { useState } from 'react';
import {ButtonComponent} from '../../components/ButtonComponent';
import {InputComponent} from '../../components/ImputComponent';

export function FormPage() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    console.log('Input Value:', inputValue);
  };

  return (
    <div>
      <InputComponent value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ButtonComponent onClick={handleSubmit} />
    </div>
  );
};