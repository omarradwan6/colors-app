import React from 'react';
import 'rc-slider/assets/index.css';
import './Palette.css'
import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state={format:'hex'}
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({format:e.target.value})
     
        this.props.changeFormat(e.target.value)
    }

    render() {
        

        return (
            <header className='navbar'>
                <div className='logo'>
                    <a href='#'>Color Picker</a>
                </div>
                <div className='slider-container'>
                    <span> level:{this.props.level}</span>
                <div className='slider'>
                    <Slider
                        defaultValue={this.props.level}
                        min={100}
                        max={900}
                        onAfterChange={this.props.changeLevel}
                        step={100} />
                </div>
                <Select value={this.state.format} onChange={this.handleChange}>

                <MenuItem value='HEX'>HEX- fffff</MenuItem>
                <MenuItem value='rgb'>rgb - rgb(255,255,255)</MenuItem>
                <MenuItem value='rgba'>rgba - rgba(255,255,255,0.1)</MenuItem>
      

                </Select>
                </div>


            </header>



        );

    }

}

export default Navbar;
