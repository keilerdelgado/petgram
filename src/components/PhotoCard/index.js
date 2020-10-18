import React from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({ id, liked, likes=0, src = DEFAULT_IMAGE }) => {
  const [ show, ref ] = useNearScreen()

  //como la imagen no se va a mostrar sino hasta que aparezca en el viewport es importante reservar el espacio que va a ocupar la imagen, ya que si el ternario no lo renderiza su altura se vuelve 0 y por ello entonces ahora si estaría en el viewport, la forma de resolver esto es dandole una altura mínima al article
  return (
      <Article ref={ref}>
        {show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              { //renderProp
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({ variables: {
                      input: { id }
                    } })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                }
              }
            </ToggleLikeMutation>
          </>
        }
      </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName ) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`Value must be defined ${propName}`)
    }
    if(propValue < 0) {
      return new Error(`${propName} value must be grater than 0 zero`)
    }
  }
}
