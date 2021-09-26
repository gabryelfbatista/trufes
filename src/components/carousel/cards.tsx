
export type cardContent = {
    title:string,
    description:string,
    color:string
}

export default function Card({title,description,color}:cardContent){
    const style = "grid w-cards h-quadrados "
    return (
        <div className = {style+color}>
            <h1 className="place-self-center text-center self-end mb-12 text-5xl font-bold text-white">
                {title}
                <p className="p-6 text-2xl font-normal"> {description} </p>
            </h1>
        </div>
    )
}