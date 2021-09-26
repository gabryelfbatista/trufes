import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

import Carousel from '../components/carousel/carousel'
import Card from '../components/carousel/cards'

const carouselData = 
[{title: 'Futebol 2D',
description:'escreva aqui',
color: 'bg-green-trufes'},
{title: 'OPEN',
description:'escreva aqui',
color: 'bg-blue-trufes'
},
{title: 'VSSS',
description: 'escreva aqui',
color: 'bg-orange-trufes'},
]

const Index = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black-trufes" > 
      <Carousel data={carouselData}/>
    </div>
  )
};

export default Index;
