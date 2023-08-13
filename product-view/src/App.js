import React,{useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import ProductDescription from './components/ProductDesciption';
import PartsSelection from './components/PartsSelection';
import FinalView from './components/FinalView';
import AssemblerParts from './components/AssembleParts';

const partsList = [
  {
    id: 1,
    name: 'skelten',
    imageUrl: 'https://img.freepik.com/premium-photo/generative-ai-car-assembly-line-is-assembled-complete-car-skeleton_874904-418.jpg',
  },
  {
    id: 2,
    name: 'chassis',
    imageUrl:'https://gomechanic.in/blog/wp-content/uploads/2020/10/Ladder-chassis-min.jpg',
  },
  {
    id: 3,
    name: 'engine',
    imageUrl:'https://images.pexels.com/photos/2027045/pexels-photo-2027045.jpeg?cs=srgb&dl=pexels-markus-spiske-2027045.jpg&fm=jpg',
  },
  {
    id: 4,
    name : 'battery',
    imageUrl : 'https://www.tatagreenbattery.com/wp-content/uploads/2020/12/DIN60L.png',
  },
  {
    id: 5,
    name: 'seat',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/BMW_Alpina_B3_Biturbo_E92-Leder-Vordersitze_in_Dakota-braun.jpg/1200px-BMW_Alpina_B3_Biturbo_E92-Leder-Vordersitze_in_Dakota-braun.jpg',
  }
];

const App = () => {

  return (
<div>
<Routes>
  <Route path='/' element={<ProductDescription />}/>
  <Route path='/parts' element={<PartsSelection  partsList={partsList}/>}/>
  <Route path='/assemble' element={<AssemblerParts/>}/>
  <Route path='/final' element={<FinalView/>}/>
</Routes>

</div>
  );
};

export default App;
