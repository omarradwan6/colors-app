import React from 'react';
import Palette from './Palette'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'



class App extends React.Component {


  findPalette(id) {

    return seedColors.find((palette) => {

      return palette.id === id

    })

  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path='/palette/:id' render={(routeProps) =>

          <Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))} />

        }
        />
        <Route exact path='/palette/:paletteid/:colorid' render={(routeProps) => <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteid))} colorId={routeProps.match.params.colorid} />} />

      </Switch>


    );
  }



}

export default App;
