import React from 'react';
import styled, { keyframes } from "styled-components";


const rotate = keyframes`
    0% {
        opacity: 1;
        -webkit-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }
    100% {
        opacity: 0;
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
`

const StyledSpinner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 200px !important;
    height: 200px !important;
    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    div > div {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #1d3f72;
        -webkit-animation: ${rotate} 1s linear infinite;
        animation: ${rotate} 1s linear infinite;
    }
    div:nth-child(1) > div {
        left: 140px;
        top: 80px;
        -webkit-animation-delay: -0.875s;
        animation-delay: -0.875s;
    }
    > div:nth-child(1) {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 160px 100px;
        transform-origin: 160px 100px;
    }
    div:nth-child(2) > div {
        left: 122.42640685999999px;
        top: 122.42640685999999px;
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
    }
    > div:nth-child(2) {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 142.42640686px 142.42640686px;
        transform-origin: 142.42640686px 142.42640686px;
    }
    div:nth-child(3) > div {
        left: 80px;
        top: 140px;
        -webkit-animation-delay: -0.625s;
        animation-delay: -0.625s;
    }
    > div:nth-child(3) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-transform-origin: 100px 160px;
        transform-origin: 100px 160px;
    }
    div:nth-child(4) > div {
        left: 37.57359314px;
        top: 122.42640685999999px;
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }
    > div:nth-child(4) {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        -webkit-transform-origin: 57.57359314px 142.42640686px;
        transform-origin: 57.57359314px 142.42640686px;
    }
    div:nth-child(5) > div {
        left: 20px;
        top: 80px;
        -webkit-animation-delay: -0.375s;
        animation-delay: -0.375s;
    }
    > div:nth-child(5) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-transform-origin: 40px 100px;
        transform-origin: 40px 100px;
    }
    div:nth-child(6) > div {
        left: 37.57359314px;
        top: 37.57359314px;
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
    }
    > div:nth-child(6) {
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg);
        -webkit-transform-origin: 57.57359314px 57.57359314px;
        transform-origin: 57.57359314px 57.57359314px;
    }
    div:nth-child(7) > div {
        left: 80px;
        top: 20px;
        -webkit-animation-delay: -0.125s;
        animation-delay: -0.125s;
    }
    > div:nth-child(7) {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-transform-origin: 100px 40px;
        transform-origin: 100px 40px;
    }
    div:nth-child(8) > div {
        left: 122.42640685999999px;
        top: 37.57359314px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    > div:nth-child(8) {
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        -webkit-transform-origin: 142.42640686px 57.57359314px;
        transform-origin: 142.42640686px 57.57359314px;
    }
    div:nth-child(9) > div {
        left: 140px;
        top: 80px;
        -webkit-animation-delay: 0.125s;
        animation-delay: 0.125s;
    }
    > div:nth-child(9) {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        -webkit-transform-origin: 160px 100px;
        transform-origin: 160px 100px;
    }
   
`

const Spinner = () => {
    return (
        <StyledSpinner className="lds-spin"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></StyledSpinner>
    )
}

export default Spinner;