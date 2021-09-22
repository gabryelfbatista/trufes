import React from 'react'

export function Card(title:any, description:any){
    const style = "grid flex w-4/5 h-quadrados"
    return (
        <div className = {style}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}