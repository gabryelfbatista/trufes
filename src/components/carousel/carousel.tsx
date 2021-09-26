import Card from './cards'
import {cardContent} from "./cards"

type Props ={
  data:cardContent[]
}

export default function Carousel({data}:Props) { 
  return(
    <>
      <p className="text-center md:text-center mb-10 text-white text-9x1"> Categorias </p>
      <div className="grid place-items-center justify-items-center mt-20 mx-12 h-retangulo bg-gray-trufes">
        <div className="grid grid-flow-col my-12 mx-16 space-x-40">
          {data.map(elementoAtual => (
            <div key = {elementoAtual.title} >
              <Card title = {elementoAtual.title} description = {elementoAtual.description} color={elementoAtual.color}></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

