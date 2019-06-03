import React from 'react';
import Palette from './Palette'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'



class App extends React.Component {


  findPalette(id) {

    return seedColors.find((palette) => {

     return palette.id === id

    })

  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedColors}/>} />
        <Route exact path='/palette/:id' render={(routeProps) =>

          <Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))}/>
    
        }
       />
      </Switch>


    );
  }



}

export default App;
