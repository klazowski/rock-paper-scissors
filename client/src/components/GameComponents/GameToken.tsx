import React from 'react';

const GameToken = (props: {
  onClick: (event: React.MouseEvent, tokenSymbol: TokenSymbol) => void;
  tokenSymbol: TokenSymbol;
  tokenFrameColour: Gradient;
  position: { top: string; left: string };
}): JSX.Element => {
  const areaSize = 150;
  const ringOuterDiameter: number = 130;
  const ringInnerDiameter: number = 100;
  const shadowOut: number = 5;

  // alt={`${props.tokenSymbol} icon button`}
  return (
    <button
      className={props.tokenSymbol}
      onClick={(event: React.MouseEvent) => props.onClick(event, props.tokenSymbol)}
      style={{ position: 'absolute', top: props.position.top, left: props.position.left }}
    >
      <svg
        width={areaSize}
        height={areaSize}
        viewBox={`0 0 ${areaSize} ${areaSize}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`tokenGrad_${props.tokenSymbol}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: props.tokenFrameColour.gradientStart, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: props.tokenFrameColour.gradientEnd, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx={areaSize / 2}
          cy={areaSize / 2}
          r={ringInnerDiameter / 2}
          stroke={`url(#tokenGrad_${props.tokenSymbol})`}
          stroke-width="15"
          fill="white"
        />

        <image
          x={areaSize / 2 - 20}
          y={areaSize / 2 - 25}
          height={50}
          xlinkHref={`./images/icon-${props.tokenSymbol}.svg`}
        />
      </svg>
    </button>
  );
};

export default GameToken;
