import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  progress: number;
};

export const ProgressBar: React.FC<Props> = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  const StyledProgressBar = styled.div`
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    border: 1px solid #e4229c;
    overflow: hidden;
    transition: width 0.3s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${width}%;
      background-image: linear-gradient(to right, #e4229c 0%, #e4229c 80%, #fff 50%, #fff 100%);
      // transition: width 2s ease-in-out;
    }
  `;

  return <StyledProgressBar />;
};
