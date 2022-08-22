import React from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14/16,
    borderBottom: '1px solid black',
    iconWidth: 16,
    iconHeight: 16,
    stroke: 1,
  },
  large: {
    fontSize: 18/16,
    borderBottom: '2px solid black',
    iconWidth: 18,
    iconHeight: 18,
    stroke: 2,
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
          '--fontSize': styles.fontSize + 'rem',
          '--borderBottom': styles.borderBottom,
        }}
        ></Input>
      <IconWrapper
        size={size}
        style={{
          '--width': styles.iconWidth + 'px',
          '--height': styles.iconHeight + 'px',
          }}>
        <Icon
          id={icon}
          size={size} 
          strokeWidth={styles.stroke}
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
  border-bottom: var(--borderBottom);
  text-align: right;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 2px;
  }
  
  &::hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--width);
  height: var(--height);
  margin: auto;
  pointer-events: none;
  color: ${COLORS.gray700};
`;

export default IconInput;
