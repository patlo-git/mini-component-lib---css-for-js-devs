/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// taken from our button component
const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--borderRadius": 8 + "px",
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  let Component;
  if (value > 99) {
    Component = RoundedProgress;
  } else {
    Component = ProgressBarBase;
  }

  return (
  <Component max="100" style={styles} value={value} size={size}></Component>
  )
};

const ProgressBarBase = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 370px;
  height: var(--height);

  &::-webkit-progress-bar {
    padding: var(--padding);
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--borderRadius); 
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }
 
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px; 
  }
`;

// only applies when value is > 99
const RoundedProgress = styled(ProgressBarBase)`
  ::-webkit-progress-value {    
    border-radius: 4px; 
  }
`;

export default ProgressBar;
