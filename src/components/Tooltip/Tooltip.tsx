import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Container, TooltipContent, Arrow, TooltipDetail } from './common.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export type Direction = 'up' | 'down' | 'left' | 'right';
export type Color = 'dark' | 'light' ;

interface Props {
    title: string;
    color?: Color;
    direction?: Direction;
    children: ReactNode | string;
    detail?: string;
  }

const Tooltip :React.FC<Props> = ({ title, color, direction, detail, children }) => {
    const node: any = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = ({ target }) => {
        if (node.current.contains(target)) {
            return;
        }
        setIsVisible(false);
    };

    useEffect(() => {
        document.addEventListener('mouseover', handleClick);
        return () => {
            document.removeEventListener('mouseover', handleClick);
        };
    }, []);

    return (
    <Container
        data-testid="tooltip"
        ref={node}
        onMouseEnter={() => setIsVisible(!isVisible)}
    >
        <div data-testid="tooltip-placeholder">{children}</div>
        {isVisible && (
            <TooltipContent
                direction = {direction}
                color = {color?color:'dark'}
                data-testid="tooltip-content"
            >
                <Arrow 
                direction = {direction} 
                color = {color?color:'dark'}>
                </Arrow>
                {detail?
                <>
                <p><FontAwesomeIcon icon={faQuestionCircle} /><b>{title}</b></p>
                <TooltipDetail>{detail}</TooltipDetail>
                </>
                :title}
            </TooltipContent>
        )}
    </Container>
);
};

export default Tooltip;

