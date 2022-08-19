import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

import Icon from '../Icon/Icon';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const style={
    position:'absolute',
    top:'11px',
    left:'162px',
    color: 'hsl(0deg 0% 40%)',
  }

  return (
    <Wrapper>
      <SelectForm value={value} onChange={onChange}>
        {children}
      </SelectForm>
      <Icon style={style} id='chevron-down'></Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const SelectForm = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
