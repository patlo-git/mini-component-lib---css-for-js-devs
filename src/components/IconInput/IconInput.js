import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
    stroke: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 36,
    stroke: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          '--iconSize': styles.iconSize + 'px',
          }}>
        <Icon
          id={icon}
          size={styles.iconSize} 
          strokeWidth={styles.stroke}
          ></Icon>
      </IconWrapper>
      <TextInput
        aria-label="Search Input Form"
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--fontSize': styles.fontSize / 16 + 'rem',
          '--stroke': styles.stroke + 'px',
        }}
        ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: var(--iconSize);
  margin: auto 0;
`;

const TextInput = styled.input`
  appearance: none;
  border: none;
  border-bottom: var(--stroke) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  font-size: var(--fontSize);
  padding-left: var(--height);
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
