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
    iconWidth: 16/16,
    iconHeight: 16/16,
    stroke: 1,
  },
  large: {
    fontSize: 18/16,
    borderBottom: '2px solid black',
    iconWidth: 24/16,
    iconHeight: 24/16,
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
        aria-label="Search Input Form"
        style={{
          '--left': (styles.iconWidth * 1.5) + 'rem',
          '--fontSize': styles.fontSize + 'rem',
          '--borderBottom': styles.borderBottom,
          '--padding': (styles.iconWidth / 4) + 'rem',
        }}
        ></Input>
      <IconWrapper
        size={size}
        style={{
          '--width': styles.iconWidth + 'rem',
          '--height': styles.iconHeight + 'rem',
          }}>
        <Icon
          id={icon}
          size={size} 
          strokeWidth={styles.stroke}
          ></Icon>
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
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
  padding: var(--padding);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
    position: absolute;
    left: var(--left);
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
  width: var(--width);
  height: var(--height);
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
