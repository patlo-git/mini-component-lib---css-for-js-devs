import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

import Icon from '../Icon/Icon';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElDefault 
        value={value} 
        onChange={onChange}
      >
        {children}
      </SelectElDefault>
      <SelectElOverlay>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id='chevron-down' size={24} strokeWidth={1}></Icon>
        </IconWrapper>
      </SelectElOverlay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectElDefault = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
  -moz-appearance: none;
  // Allow the select to span the full height in Safari
  -webkit-appearance: none;
`;

const SelectElOverlay = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16}rem;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${SelectElDefault}:focus + & {
    outline: 1px auto ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }
    
  ${SelectElDefault}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`;

export default Select;
