import React from "react"
import IconProps from "@type/icon-type"

const SparklesIcon: React.FC<IconProps> = ({
    size = "24",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
        >
            <path
                d="M8.1775 13.2533L7.5 15.625L6.8225 13.2533C6.64739 12.6407 6.31908 12.0828 5.86855 11.6323C5.41802 11.1818 4.86012 10.8534 4.2475 10.6783L1.875 10L4.24667 9.3225C4.85928 9.14739 5.41718 8.81908 5.86772 8.36855C6.31825 7.91802 6.64656 7.36012 6.82167 6.7475L7.5 4.375L8.1775 6.74667C8.35261 7.35928 8.68092 7.91718 9.13145 8.36772C9.58198 8.81825 10.1399 9.14656 10.7525 9.32167L13.125 10L10.7533 10.6775C10.1407 10.8526 9.58282 11.1809 9.13228 11.6315C8.68175 12.082 8.35344 12.6399 8.17833 13.2525L8.1775 13.2533ZM15.2158 7.2625L15 8.125L14.7842 7.2625C14.6606 6.76799 14.405 6.31635 14.0447 5.95586C13.6843 5.59537 13.2328 5.33958 12.7383 5.21583L11.875 5L12.7383 4.78417C13.2328 4.66042 13.6843 4.40463 14.0447 4.04414C14.405 3.68365 14.6606 3.23201 14.7842 2.7375L15 1.875L15.2158 2.7375C15.3394 3.23211 15.5952 3.68382 15.9557 4.04432C16.3162 4.40482 16.7679 4.66056 17.2625 4.78417L18.125 5L17.2625 5.21583C16.7679 5.33944 16.3162 5.59518 15.9557 5.95568C15.5952 6.31618 15.3394 6.76789 15.2158 7.2625ZM14.0783 17.1392L13.75 18.125L13.4217 17.1392C13.3296 16.863 13.1745 16.6121 12.9687 16.4063C12.7629 16.2005 12.512 16.0454 12.2358 15.9533L11.25 15.625L12.2358 15.2967C12.512 15.2046 12.7629 15.0495 12.9687 14.8437C13.1745 14.6379 13.3296 14.387 13.4217 14.1108L13.75 13.125L14.0783 14.1108C14.1704 14.387 14.3255 14.6379 14.5313 14.8437C14.7371 15.0495 14.988 15.2046 15.2642 15.2967L16.25 15.625L15.2642 15.9533C14.988 16.0454 14.7371 16.2005 14.5313 16.4063C14.3255 16.6121 14.1704 16.863 14.0783 17.1392Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SparklesIcon
