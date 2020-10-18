import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 15px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%
` 
//el paddig de 56.25% es una forma de mantener el aspect ratio de todas las imagenes iguales

export const Img = styled.img`
  ${fadeIn({time:'1s'})}
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`


