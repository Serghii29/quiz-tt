import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  progress: number
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
    border: 1px solid #E4229C;
    overflow: hidden;
    transition: width 1s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${width}%;
      background-image: linear-gradient(to right, #E4229C 0%, #E4229C 100%, #fff 50%, #fff 100%);
      transition: width 2s ease-in-out;
    }
  `;

  return <StyledProgressBar />;
};
