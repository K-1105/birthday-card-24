import React from 'react';

export const Face: React.FC = () => {
   return (
      <svg
         width="300"
         height="400"
         viewBox="300 400 300 400"
         version="1.1"
         id="svg3"
         xmlns="http://www.w3.org/2000/svg"
      >
         <defs>
            <linearGradient
               id="linearGradient8"
               gradientUnits="userSpaceOnUse"
               x1="384.42307"
               y1="470.29462"
               x2="386.61911"
               y2="475.85721"
            >
               <stop style={{ stopColor: '#e6a3a3', stopOpacity: 1 }} offset="0" id="stop8" />
               <stop style={{ stopColor: '#e6a3a3', stopOpacity: 0 }} offset="1" id="stop9" />
            </linearGradient>
            <linearGradient
               xlinkHref="#linearGradient8"
               id="linearGradient9"
               gradientUnits="userSpaceOnUse"
               gradientTransform="translate(0.12885773,2.2550103)"
            />
            <linearGradient
               xlinkHref="#linearGradient8"
               id="linearGradient10"
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(-1.0120319,0,0,1,909.69073,2.484866)"
               x1="438.35626"
               y1="448.39096"
               x2="435.51324"
               y2="455.74673"
            />
         </defs>
            <g id="face-features"
               transform="matrix(-1, 0, 0, 1, 897.79247, 0)"
            >
               <path
               style={{
                  fill: "none",
                  stroke: "#502d16",
                  strokeWidth: 2.85167,
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
               }}
               d="m 425.22057,462.73623 c -7.7736,-3.55866 -13.93711,-2.32682 -16.77078,-2.32682"
               id="eyebrowL"
               />
               <path
               style={{
                  fill: "none",
                  stroke: "#502d16",
                  strokeWidth: 2.85167,
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
               }}
               d="m 375.65269,462.53776 c 7.7736,-3.55866 13.93711,-2.32682 16.77078,-2.32682"
               id="eyebrowR"
               />
               <ellipse
               style={{
                  fill: "#000000",
                  stroke: "none",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
               }}
               id="eyeR"
               cx="386.46033"
               cy="466.61945"
               rx="2.7060122"
               ry="2.8348701"
               />
               <ellipse
               style={{
                  fill: "#000000",
                  stroke: "none",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
               }}
               id="eyeL"
               cx="415.69901"
               cy="466.41742"
               rx="2.7060122"
               ry="2.8348701"
               />
               <path
               style={{
                  fill: "#e6a3a3",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 3,
                  strokeLinecap: "butt",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "stroke markers fill",
               }}
               d="m 401.66554,460.69199 c 13.53007,30.66813 -2.96372,22.5501 -2.96372,22.5501"
               id="nose"
               />
               <path
               style={{
                  fill: "url(#linearGradient9)",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 3,
                  strokeLinecap: "butt",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "stroke markers fill",
               }}
               d="m 377.77369,482.00216 c 0.35407,-19.51935 24.03748,-8.37238 20.90871,0.31776"
               id="cheekR"
               />
               <path
               id="mouth"
               style={{
                  fill: "#f2f2f2",
                  stroke: "#e898a8",
                  strokeWidth: 3.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "fill markers stroke",
               }}
               d="m 415.49108,493.25793 c -3.41403,3.79999 -5.55896,6.73912 -12.49653,6.94647 -6.93757,0.20735 -10.48896,-2.4408 -14.6852,-6.58201 9.15797,0.58035 13.22098,-0.0153 13.82418,0.20626 0.6839,-0.43898 6.18683,0.37129 13.35755,-0.57072 z"
               />
               <path
               style={{
                  fill: "url(#linearGradient10)",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 3.01799,
                  strokeLinecap: "butt",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "stroke markers fill",
               }}
               d="m 428.92459,482.23201 c -0.35833,-19.51935 -24.32670,-8.37238 -21.16028,0.31776"
               id="cheekL"
               />
            </g>
      </svg>
   );
};
