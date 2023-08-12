import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ProductDescription from './components/ProductDesciption';
import PartsSelection from './components/PartsSelection';
import FinalView from './components/FinalView';
import AssemblerParts from './components/AssembleParts';


const App = () => {
  return (
<div>
<Routes>
  <Route path='/' element={<ProductDescription />}/>
  <Route path='/parts' element={<PartsSelection/>}/>
  <Route path='/assemble' element={<AssemblerParts/>}/>
  <Route path='/final' element={<FinalView/>}/>
</Routes>

</div>
  );
};

export default App;
