import {Card} from "./cards"
import React from 'react'


export function Carousel(props:any) {
  const data = props

  return(
    <>
      <p className="text-center md:text-center mb-10 text-white text-9x1"> Categorias </p>
      <div className="grid grid-cols-3 place-items-center justify-center mt-20 mx-12 h-retangulo bg-gray-500">
        <div>{data.map((elementoAtual:any) => <Card title={elementoAtual.title} description={elementoAtual.description}></Card>)}</div>
      </div>
    </>
  )
}

