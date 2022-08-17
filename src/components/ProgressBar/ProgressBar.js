/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
  <ProgressStyling max="100" value={value}></ProgressStyling>
  )
};

const ProgressStyling = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 370px;
  height: 24px;

  &::-webkit-progress-bar {
    padding: 4px;
    background-color: #eee;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
 
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

export default ProgressBar;
