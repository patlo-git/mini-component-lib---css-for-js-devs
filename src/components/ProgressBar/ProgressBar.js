/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// taken from our button component
const STYLES = {
  small: {
    height: 8,
    // padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    // padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      id="percent-loaded" 
      role="progressbar" 
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      size={size}
      style={{
        '--radius': styles.radius + 'px',
        '--padding': styles.padding + 'px',
      }}
      >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <ProgressBarValue
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }} />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  // width: 370px;
  // height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  // Trims corners when progress bar value approaches 100%
  overflow: hidden;
`;

const ProgressBarValue = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
