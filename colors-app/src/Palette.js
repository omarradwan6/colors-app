import React from 'react';
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './navbar'



class Palette extends React.Component {

  constructor(props) {
    super(props)
    this.state = { level: 500,format:'hex' }
    this.changeLevel = this.changeLevel.bind(this)
    this.changeFormat=this.changeFormat.bind(this)
  }

  changeFormat(e){
    this.setState({format:e})

  }

  changeLevel(level) {

    this.setState({ level })
  }

  render() {

    const colorboxes = this.props.colors.colors[this.state.level].map(color => {

      return <ColorBox background={color[this.state.format]} name={color.name} />
    });


    return (
      <div className='Palette'>
        <Navbar level={this.state.level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
        
        <div className='Palette-colors'>
          {colorboxes}

        </div>
      </div>
    );
  }

}

export default Palette;
