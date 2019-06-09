import React from 'react'
import { withStyles } from '@material-ui/styles';
import { all } from 'q';
import ColorBox from './ColorBox'
import './ColorBox.css'



const styles = {


}

class SingleColorPalette extends React.Component {


    constructor(props) {
        super(props)

        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }

    gatherShades(palette, colorId) {

        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            // console.log('ssss',allColors)

            shades.push(allColors[key].filter(color => {
                console.log(colorId)
                return color.id === colorId

            }))
        }
        return shades.slice(1)
    }


    render() {
        console.log('shades', this._shades)

        const { classes } = this.props

        const boxes = this._shades.map(color => {
          return  <ColorBox />
        })


        return (

            <div className='ColorBox'>
                {boxes}

            </div >


        );

    }

}




export default withStyles(styles)(SingleColorPalette)