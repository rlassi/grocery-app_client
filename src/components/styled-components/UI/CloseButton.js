import React from 'react';
import styled from 'styled-components';

const CloseButton = ({ onClick, bgColor }) => {
    return (
        <StyledCloseButton onClick={onClick}>
            <CloseButtonContent>
                <CloseX bgColor={bgColor} />
                <CloseX bgColor={bgColor} />
            </CloseButtonContent>
        </StyledCloseButton>
    )
}

export default CloseButton;

const StyledCloseButton = styled.div`
    position: fixed;
    top: 3rem;
    right: 3rem;
    &:hover {
        cursor: pointer;
    }
`;

const CloseButtonContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const CloseX = styled.div`
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};
    height: 2px;
    width: 25px;
    margin: 3px 0;
    transform-origin: 6.5px;

    &:nth-child(1) {
        transform: rotate(45deg);
    }

    &:nth-child(2) {
        transform: rotate(-45deg);
    }
`;