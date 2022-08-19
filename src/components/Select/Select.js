import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectForm value={value} onChange={onChange}>
        {children}
      </SelectForm>
    </Wrapper>
  );
};

const SelectForm = styled.select`
  display: block;
  // -webkit-appearance: none; 
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  
  // &::after {
  //   content: "▼";
  //   font-size: 1rem;
  //   top: 6px;
  //   right: 10px;
  //   position: absolute;
  // }
`;


// TODO: Style the chevron

export default Select;
