import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Petgram - Tus favoritos' subtitle='aqui puedes encontrar tus fotos favoritas'>
      <FavsWithQuery />
    </Layout>
  )
}
