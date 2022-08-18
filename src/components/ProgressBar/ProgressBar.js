/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// taken from our button component
const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": 2 + "px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": "24px",
    "--borderRadius": 4 + "px",
    "--padding": "16px 16px",
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
  <Component max="100" value={value}></Component>
  )
};

// TODO: make three different sizes
const ProgressBarBase = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 370px;
  height: var(--height);

  &::-webkit-progress-bar {
    padding: 4px;
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px; 
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }
 
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px; 
  }
`;

const RoundedProgress = styled(ProgressBarBase)`
  ::-webkit-progress-value {    
    border-radius: 4px; 
  }
`;

export default ProgressBar;
