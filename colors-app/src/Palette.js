import React from 'react';
import ColorBox from './ColorBox'
import './Palette.css'

class Palette extends React.Component {
  
  render(){
    console.log(this.props.colors.colors)
    const colorboxes= this.props.colors.colors.map(color=>{

      return <ColorBox background={color.color} name={color.name}/>
});


return (
          <div className='Palette'>
          <div className='Palette-colors'>
          {colorboxes}

          </div>
          </div>
      );
  }

}

export default Palette;
