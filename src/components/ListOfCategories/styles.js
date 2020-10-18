import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  scrollbar-width: none;
  padding-bottom: 10px;
  padding-top: 10px;
  background: #FFF;
  border-bottom: 1px solid #F5F5F5;
  ${props => props.fixed && css`
      ${fadeIn({time:'.2s'})}
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,.3);
      left: 0;
      margin: 0 auto;
      max-width: 90%;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
      background: #F9F9F9;
    }
  `}
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`