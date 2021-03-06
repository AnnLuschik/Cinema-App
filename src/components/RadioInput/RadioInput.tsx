import React from 'react';
import styled from 'styled-components';
import './styles.css';

interface IProps {
  id: string
  value: string
  currentSearch: string
  onChange: () => void
}

export const RadioInput = React.memo(({
  id, value, currentSearch, onChange,
}: IProps) => (
  <>
    <StyledInput type="radio" id={id} onChange={onChange} checked={currentSearch === id} />
    <StyledLabel htmlFor={id} isChecked={currentSearch === id}>{value}</StyledLabel>
  </>
));

const StyledInput = styled.input`
  visibility: hidden;
  display: none;
`;

const StyledLabel = styled.label<{ isChecked: boolean }>`
  margin-right: 5px;
  padding: 5px 20px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) => (props.isChecked
    ? 'background: #F65263'
    : 'background: #3B3C3C'
  )}
  
`;
