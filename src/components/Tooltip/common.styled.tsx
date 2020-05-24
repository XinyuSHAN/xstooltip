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
export const TooltipDetail = styled.textarea`
font-family: Arial, Helvetica, sans-serif;
font-size: 8px;
height: 40px;
width: 200px;
text-align: left;
border-width:0px; 
border-radius: 3px;
padding:5px;
background: aliceblue;
`

export const TooltipContent = styled.div<{ direction: string,color:string}>`
  color: ${props => (props.color==='light' ? 'grey':'#efefef')};
  position: absolute;
  z-index: 10;
  padding: 12px;
  font-size: 12px;
  cursor: default;
  border-radius: 3px;
  white-space: nowrap;
  font-family: Arial, Helvetica, sans-serif;;
  background-color: ${props => (props.color==='light' ? '#efefef':'grey')};
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.16);
  animation: fadeIn ease-in-out 0.65s;
  ${props => 
    {
      if (props.direction==='up')
        return ` bottom: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);`;
      else if (props.direction==='down')
        return `top: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);`;
      else if (props.direction==='left')
        return `right: calc(100% + 18px);`;
      else if (props.direction==='right')
        return `left: calc(100% + 18px);`;
      }}

  &.sm {
      max-width: 23rem;
  }

  &.md {
      max-width: 40rem;
  }
`

export const Arrow = styled.span<{ direction: string,color:string}>`
  position: absolute;
  width: 0;
  height: 0;
  ${props => 
    {
      const color = props.color==='light' ? '#efefef':'grey';
      if (props.direction==='up')
        return ` bottom: -8px;
        left: calc(50% - 10px);
        border-right: 10px solid transparent;
        border-top: 10px solid ${color};
        border-left: 10px solid transparent;`;
      else if (props.direction==='down')
        return `top: -8px;
        left: calc(50% - 10px);
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${color};
        border-left: 10px solid transparent;`;
      else if (props.direction==='left')
        return ` top: calc(50% - 10px);
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            right: -8px;
            border-left: 10px solid ${color};`;
      else if (props.direction==='right')
        return `left: -8px;
                border-right: 10px solid ${color};
                top: calc(50% - 10px);
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;`;
      }}
`