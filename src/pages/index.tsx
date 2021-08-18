import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

import {Carousel} from '../components/carousel/carousel'

const Index = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black" > 
    <Carousel></Carousel>
    </div>
  )
};

export default Index;
