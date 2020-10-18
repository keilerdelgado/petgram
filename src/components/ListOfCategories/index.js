import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://ig-clone-petgram.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(e => {
        console.error(e)
      })
  },[])
  return { categories, loading}
}

const ListOfCategoriesComponent = () => {
  const { categories, loading }  = useCategoriesData()
  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll',onScroll)
  },[showFixed])

  //ternario para devolver un placeholder en lugar de un loader
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ?
          <Item key={'loading'}><Category /></Item> :
        categories.map(category =>
          <Item key={category.id}>
            <Category  {...category} path={`/pet/${category.id}`}/>
          </Item>
        )
      }
    </List>
  )

  //asi devolvemos un loader durante el loading
  //if(loading) return 'cargando...'

  return (
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)