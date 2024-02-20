import React from 'react';
import '../styles/circle.styles.scss';

type Props = {
  progress: number;
  circleWidth: string;
};

export const CircleProgressBar: React.FC<Props> = ({ progress, circleWidth }) => {
  const radius = 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <div>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle
          cx={+circleWidth / 2}
          cy={+circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle__background"
        />

        <circle
          cx={+circleWidth / 2}
          cy={+circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          className="circle__progress"
          transform={`rotate(-90 ${+circleWidth / 2} ${+circleWidth / 2})`}
        />

        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle__text"
          style={{ color: 'white' }}
        >
          {progress}
          %
        </text>
      </svg>
    </div>
  );
};
