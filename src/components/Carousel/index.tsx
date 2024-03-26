import React from 'react';
import { Carousel } from 'antd';

const App: React.FC = () => (
  <Carousel autoplay effect="fade" className='flex flex-col sm:max-w-3xl'>
    <div className='w-1/2 border-2 border-red-400'>
    dsfsdfdsf
    </div>
    <div className='w-1/2 border-2 border-red-400'>
      2
    </div>
    {/* <div>
      3
    </div>
    <div>
     4
    </div> */}
  </Carousel>
);

export default App;