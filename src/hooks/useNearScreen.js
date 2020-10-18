import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const ref = useRef(null)
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    //creamos un ternario para verificar si el navegador soporta el intersectionObserver, en caso de soportarlo devuelve el primver valor, en el caso de no soportarlo devuelve el import dinamico, como el import dinamico es una promesa necesitamos trabajar el windows.IntersectionObserver como una promesa, de esta forma cuando devuelva alguno de los dos no habrá problema y podrá cargar cualquiera de los dos cuando fuera necesario
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      //debido a que algunos navegadores no soportan el intersector lo incluimos con un polyfill que instalamos (npm install intersection-observer), asi extiende la funcionaliadd y ejecutamos el intersector dentro de esta promesa
      :import('intersection-observer'))
        .then(() => {
            //entries son los intersectores que se pueden ver en el viewport
            //habra un intersector, un array por cada ref, en este caso por cada card publicada
            //el intersector tiene un atributo booleano isIntersecting dependiendo de si está visible o no
            const observer = new window.IntersectionObserver(entries => {
            const { isIntersecting } = entries[0]
            if(isIntersecting){
              setShow(true)
              //una vez cambio a true el intersector de observer del elemento lo terminamos para que no siga consumiento recursos, pues se sigue disparando cuando cambia su estado de visible a no visible
              observer.disconnect()
            }
          })
          observer.observe(ref.current)
        })
  },[ref])
  return [show, ref]
}