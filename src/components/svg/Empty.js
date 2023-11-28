import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Empty = (props) => (
    <Svg
        width={188}
        height={188}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={94} cy={94} r={94} fill="#F4F5F7" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M114.151 125.165c.366.117.748.177 1.132.177l39.221-.003c2.916 0 5.281-3.459 5.281-7.727 0-4.268-2.365-7.727-5.281-7.727h-4.526c-2.916 0-5.28-3.461-5.28-7.728 0-4.267 2.364-7.727 5.28-7.727h14.339c2.916 0 5.28-3.46 5.28-7.727 0-4.268-2.364-7.728-5.28-7.728h-16.595c2.916 0 5.28-3.46 5.28-7.727 0-4.268-2.364-7.727-5.28-7.727H99.446c2.916 0 5.28-3.461 5.28-7.728 0-4.267-2.364-7.727-5.28-7.727h-43c-2.916 0-5.281 3.46-5.281 7.729 0 4.268 2.365 7.728 5.281 7.728H26.278c-2.916 0-5.281 3.459-5.281 7.727 0 4.268 2.365 7.727 5.281 7.727h18.853c2.916 0 5.28 3.46 5.28 7.728 0 4.267-2.364 7.727-5.28 7.727H14.959c-2.916 0-5.281 3.458-5.281 7.727s2.365 7.729 5.281 7.729h29.419c-2.916 0-5.281 3.459-5.281 7.727 0 4.268 2.365 7.727 5.281 7.727h68.642c.384 0 .765-.06 1.131-.177Zm52.486-19.291a7.728 7.728 0 0 0-4.771 7.14v.001a7.729 7.729 0 1 0 4.771-7.141Z"
            fill="#fff"
        />
        <Path
            d="M57.398 50.274h73.965l-6.624 9.936 8.832 6.624H55.19l9.936-6.624-7.728-9.936Z"
            fill="#F0F1F5"
        />
        <Path
            d="M28.695 138.038h23.684M14.485 138.038h7.586M172.351 138.038h3.172M142.403 138.038h24.759"
            stroke="#bf1d1d"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M131.965 152.941H58.46a4.4 4.4 0 0 1-4.367-4.412V69.041a3.336 3.336 0 0 1 3.353-3.312h76.7a2.2 2.2 0 0 1 2.183 2.208v80.592a4.4 4.4 0 0 1-4.364 4.412Z"
            fill="#fff"
            stroke="#bf1d1d"
            strokeWidth={2.5}
            strokeLinecap="round"
        />
        <Path
            d="M56.294 65.729V52.482a2.1 2.1 0 0 1 1.977-2.208h73.319a2.1 2.1 0 0 1 1.981 2.208v13.247"
            stroke="#bf1d1d"
            strokeWidth={2.5}
        />
        <Circle
            cx={76.718}
            cy={85.048}
            r={3.864}
            fill="#fff"
            stroke="#bf1d1d"
            strokeWidth={2.5}
        />
        <Circle
            cx={113.148}
            cy={85.048}
            r={3.864}
            fill="#fff"
            stroke="#bf1d1d"
            strokeWidth={2.5}
        />
        <Path
            d="M112.595 88.912c0 9.755-7.908 17.663-17.663 17.663-9.755 0-17.663-7.908-17.663-17.663M57.465 51.374l7.846 7.745a1.1 1.1 0 0 1-.241 1.755l-8.776 4.855M132.587 51.454l-7.509 7.658a1.1 1.1 0 0 0 .26 1.742l8.94 4.875"
            stroke="#bf1d1d"
            strokeWidth={2.5}
            strokeLinecap="round"
        />
        <Path
            d="M124.678 23.84a1.25 1.25 0 0 0-1.866-1.663l1.866 1.664Zm-14.119 12.087a1.25 1.25 0 1 0 1.866 1.664l-1.866-1.664Zm-43.396-13.75a1.25 1.25 0 1 0-1.866 1.664l1.866-1.664Zm10.388 15.414a1.25 1.25 0 0 0 1.866-1.664l-1.866 1.664Zm45.261-15.414-12.253 13.75 1.866 1.664 12.253-13.75-1.866-1.664Zm-10.387 15.414 12.253-13.75-1.866-1.664-12.253 13.75 1.866 1.664ZM65.297 23.84 77.55 37.59l1.866-1.664-12.254-13.75-1.866 1.664Zm14.12 12.086-12.254-13.75-1.866 1.664L77.55 37.59l1.866-1.664Z"
            fill="#bf1d1d"
        />
    </Svg>
);

export default Empty;