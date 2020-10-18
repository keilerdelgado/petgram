import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import PropTypes from 'prop-types'
import { Button } from './styles'

export const FavButton = ({liked, likes, onClick }) => {

  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={onClick}>
      <Icon size='25px'/> { likes } likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}