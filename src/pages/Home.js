import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({id}) => {
  return (
    <Layout title='Tu App de Fotos de Mascotas' subtitle='description' content='con petgran puedes conseguir fotos de mascotas hermosas'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id}/>
    </Layout>
  )
}

export const Home = React.memo(HomePage,(prevProps, props) => {
  return prevProps.id === props.id
})
