import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

import Icon from '../Icon/Icon';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectFormDefault 
        value={value} 
        onChange={onChange}
      >
        {children}
      </SelectFormDefault>
      <OurSelectForm>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id='chevron-down' size={24} strokeWidth={1}></Icon>
        </IconWrapper>
      </OurSelectForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectFormDefault = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  opacity: 0%;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const OurSelectForm = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16}rem;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${SelectFormDefault}::hover + & {
    color: ${COLORS.primary};
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
