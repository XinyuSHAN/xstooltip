import React, { useEffect, useRef, useState, ReactNode } from 'react';
import cx from 'classnames';
import Styles from './styles.css';
import { Container, TooltipContent, Arrow } from './common.styled';

export type Direction = 'up' | 'down' | 'left' | 'right';
export type Color = 'dark' | 'light' ;

interface Props {
    title: string;
    color?: Color;
    direction?: Direction;
    children?: ReactNode | string;
  }

const Tooltip :React.FC<Props> = ({ title, color, direction, children }) => {
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
        <div className={Styles.container}
            data-testid="tooltip"
            ref={node}
            onMouseEnter={() => setIsVisible(!isVisible)}
        >
            <div data-testid="tooltip-placeholder">{children}</div>
            {isVisible && (
                <div
                    className={cx(Styles.tooltipContent, 
                        Styles[direction],
                        // color==='light'?Styles.tooltipContentLight:null,
                        )}
                    data-testid="tooltip-content"
                >
                    <span className={Styles.arrow}></span>
                    {title}
                </div>
            )}
        </div>
    );
};

export default Tooltip;

// return (
//     <Container
//         data-testid="tooltip"
//         ref={node}
//         onMouseEnter={() => setIsVisible(!isVisible)}
//     >
//         <div data-testid="tooltip-placeholder">{children}</div>
//         {isVisible && (
//             <TooltipContent
//                 direction = {direction}
//                 color = {color?color:'dark'}
//                 data-testid="tooltip-content"
//             >
//                 <Arrow direction = {direction}></Arrow>
//                 {title}
//             </TooltipContent>
//         )}
//     </Container>
// );