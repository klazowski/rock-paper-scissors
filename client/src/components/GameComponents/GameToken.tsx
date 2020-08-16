import React from 'react';

const GameToken = (props: { tokenSymbol: TokenSymbol; hasShadow?: boolean }): JSX.Element => {
  const areaSize = 150;
  //const ringOuterDiameter: number = 130;
  const ringInnerDiameter: number = 100;
  //const shadowOut: number = 5;

  const gradients: { [type in string]: Gradient } = {
    scissorsGradient: {
      gradientStart: `hsl(40, 84%, 53%)`,
      gradientEnd: `hsl(39, 89%, 49%)`,
    },
    paperGradient: {
      gradientStart: `hsl(230, 89%, 65%)`,
      gradientEnd: `hsl(230, 89%, 62%)`,
    },
    rockGradient: {
      gradientStart: `hsl(349, 70%, 56%)`,
      gradientEnd: `hsl(349, 71%, 52%)`,
    },
    lizardGradient: {
      gradientStart: `hsl(261, 72%, 63%)`,
      gradientEnd: `hsl(261, 73%, 60%)`,
    },
    spockGradient: {
      gradientStart: `hsl(189, 58%, 57%)`,
      gradientEnd: `hsl(189, 59%, 53%)`,
    },
  };

  return (
    <svg
      width={areaSize}
      height={areaSize}
      viewBox={`0 0 ${areaSize} ${areaSize}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id={`tokenGrad_${props.tokenSymbol}`} x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop
            offset='0%'
            style={{
              stopColor: gradients[`${props.tokenSymbol}Gradient`].gradientStart,
              stopOpacity: 1,
            }}
          />
          <stop
            offset='100%'
            style={{
              stopColor: gradients[`${props.tokenSymbol}Gradient`].gradientEnd,
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <circle
        cx={areaSize / 2}
        cy={areaSize / 2}
        r={ringInnerDiameter / 2}
        stroke={`url(#tokenGrad_${props.tokenSymbol})`}
        strokeWidth='15'
        fill='white'
      />

      <image
        x={areaSize / 2 - 20}
        y={areaSize / 2 - 25}
        height={50}
        xlinkHref={`./images/icon-${props.tokenSymbol}.svg`}
      />
    </svg>
  );
};

export default GameToken;
