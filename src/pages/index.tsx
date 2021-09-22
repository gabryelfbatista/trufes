import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

import {Carousel} from '../components/carousel/carousel'

const carouselData = 
[{title: 'vsss',
description:'evento vsss'},
{title:'Futebol2D',
description:'Futebol mas 2D'}
]

const Index = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black" > 
      <Carousel data={carouselData}/>
    </div>
  )
};

export default Index;
