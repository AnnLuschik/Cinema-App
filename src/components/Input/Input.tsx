import React, { useCallback } from 'react';
import styled from 'styled-components';

interface IProps {
  onChange: (text: string) => void
  value: string
}

export function Input({ onChange, value }: IProps) {
  const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, [onChange]);

  return <StyledInput onChange={onChangeText} value={value} />;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  color: #FFFFFF;
  background-color: #000000;
  border-bottom: 2px solid #F65263;
  opacity: 0.9;
`;
