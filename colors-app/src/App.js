import React from 'react';
import Palette from './Palette'
import seedColors from './seedColors'
import  { generatePalette } from './colorHelpers'



function App() {
  // generatePalette(seedColors[4])
  return (
    <div>
<Palette colors={generatePalette(seedColors[4])}/>

    </div>
  
  );
}

export default App;
