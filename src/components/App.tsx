import React from 'react';
import Tooltip from './Tooltip/Tooltip';
import { Button, Wrapper } from './Tooltip/common.styled';

const App: React.FC = () => {
    return (
        <Wrapper>
            <h1>Test tooltip</h1>
            <Tooltip title="Tooltip UP" direction="up">
                <Button>Up</Button>
            </Tooltip>
            <Tooltip title="Tooltip DOWN" direction="down">
                <Button>Down</Button>
            </Tooltip>
            <Tooltip title="Tooltip LEFT" direction="left">
                <Button>Left</Button>
            </Tooltip>
            <Tooltip title="Tooltip RIGHT" direction="right">
                <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Tooltip Light" direction="up" color='light'>
                <Button>Light</Button>
            </Tooltip>
        </Wrapper>
    );
}

export default App;
