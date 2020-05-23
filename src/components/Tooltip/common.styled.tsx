import styled from 'styled-components';

export const Wrapper = styled.section`
 top:40px;
 margin: 40px auto;
 width: 600px;
 text-align: center;
`

export const Button = styled.button`
  width:80px;
  cursor: pointer;
  border-radius: 3px;
  padding: 12px;
  border: 5px solid transparent;
  :hover {
    background-color:aliceblue;
  }
`

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  margin: 0 10px;
  -webkit-tap-highlight-color: transparent;
`

export const TooltipContent = styled.div<{ direction: string,color:string}>`
  color: ${props => (props.color==='light' ? 'grey':'#ffffff')};
  position: absolute;
  z-index: 10;
  padding: 12px;
  font-size: 12px;
  cursor: default;
  border-radius: 3px;
  white-space: nowrap;
  font-family: monospace;
  background-color: ${props => (props.color==='light' ? '#ffffff':'grey')};
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.16);
  animation: fadeIn ease-in-out 0.65s;

  left: ${props => {
    if (props.direction==='up'||props.direction==='left' )
      return '50%'
    else if (props.direction==='right')
      return 'calc(100% + 18px)';
  }};
  right: ${props => (props.direction==='left' ? 'calc(100% + 18px)':null)};
  top: ${props => {
    if (props.direction==='left')
      return '50%';
    else if (props.direction==='down')
      return 'calc(100% + 18px)';
  }};
  bottom: ${props => (props.direction==='up' ? 'calc(100% + 18px)':null)};
  transform: ${props => {
    if (props.direction==='up'||props.direction==='down' )
      return 'translateX(-50%)'
    else if (props.direction==='left')
      return 'translateY(-50%)';
  }};

  &.sm {
      max-width: 23rem;
  }

  &.md {
      max-width: 40rem;
  }
`

export const Arrow = styled.span<{ direction: string}>`
  position: absolute;
  width: 0;
  height: 0;
  top: ${props => {
    if(props.direction==='left')
      return 'calc(50% - 10px)';
    else if(props.direction==='down')
      return '-8px ';}};
  bottom: ${props => (props.direction==='up' ? '-8px':null)};
  left: ${props => {
    if(props.direction==='up'|| props.direction==='down')
      return 'calc(50% - 10px)';
    else if(props.direction==='right')
      return '-8px';}}
  right: ${props => (props.direction==='left' ? '-8px':null)};
  border-right: 10px solid transparent;
  border-top: 10px solid grey;
  border-left: 10px solid transparent;
}`

