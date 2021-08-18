export function Carousel(){
  return(
    <>
      <p className="text-center md:text-center mb-10 text-white text-9x1"> Categorias </p>
      <div className="grid grid-cols-3 place-items-center justify-center mt-20 mx-12 h-retangulo bg-gray-500">
        <div className="grid flex-none w-4/5 h-quadrados bg-green-100" >
          <h1 className="place-self-center text-center self-end mb-20 text-5xl font-bold text-white">Futebol 2D 
            <p className="p-6 text-2xl font-normal"> Descrição aqui </p>
          </h1>
        </div> 
        <div className="grid flex w-4/5 h-quadrados bg-blue-1000 " >
          <h1 className="place-self-center text-center self-end mb-20 text-5xl font-bold text-white"> OPEN
            <p className="p-6 text-2xl font-normal "> Descrição aqui </p>
          </h1>
        </div>
        <div className="grid flex-none w-4/5 h-quadrados bg-orange-100" >
          <h1 className="place-self-center text-center self-end mb-20 text-5xl font-bold text-white"> VSS
            <p className="p-6 text-2xl font-normal "> Descrição aqui </p>
          </h1>
        </div>
      </div>
    </>
  )
}