import React from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderBottom: 1, 
  },
  large: {
    borderBottom: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <Input
        label={label}
        width={width}
        size={size}
        placeholder={placeholder}
        style={{
          '--borderBottom': styles.borderBottom + 'px',
        }}></Input>
      <IconWrapper style={{'--size': 24 + 'px'}}>
        <Icon
          id={icon}
          size={24} 
          strokeWidth={1}
          ></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Input = styled.input`
  appearance: none;
  border: none;
  border-bottom: 1px solid black;
  text-align: right;
  padding-bottom: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
  color: ${COLORS.gray700};
`;

export default IconInput;
