import React from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14/16,
    borderBottom: 1,
    iconSize: 16/16,
    height: 24/16,
    stroke: 1,
  },
  large: {
    fontSize: 18/16,
    borderBottom: 2,
    iconSize: 24/16,
    height: 36/16,
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
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        size={size}
        placeholder={placeholder}
        aria-label="Search Input Form"
        style={{
          '--height': styles.height + 'rem',
          '--left': styles.height + 'rem',
          '--fontSize': styles.fontSize + 'rem',
          '--borderBottom': styles.borderBottom + 'px',
          '--padding': (styles.iconSize / 4) + 'rem',
          '--width': width + 'px',
        }}
        ></TextInput>
      <IconWrapper
        size={size}
        style={{
          '--iconSize': styles.iconSize + 'rem',
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

const Wrapper = styled.label`
  display: block;
  position: relative;
`;

const TextInput = styled.input`
  appearance: none;
  border: none;
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);
  padding: var(--padding) 0;
  padding-left: var(--left);
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 2px;
  }
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--iconSize);
  height: var(--iconSize);
  margin: auto 0;
  color: ${COLORS.gray700};

  ${TextInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
