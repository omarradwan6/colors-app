import React from 'react';
import 'rc-slider/assets/index.css';
import './Palette.css'
import {Link} from 'react-router-dom'
import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { format: 'hex',open:false }
        this.handleChange = this.handleChange.bind(this)
        this.closeSnackBar=this.closeSnackBar.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value, open:true })

        this.props.changeFormat(e.target.value)
    }

    closeSnackBar(){
        this.setState({open:false})

    }

    render() {


        return (
            <header className='navbar'>
                <div className='logo'>
                    <Link to='/'>Color Picker</Link>
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
                    </div>
                    <div className='select-container'>
                    <Select value={this.state.format} onChange={this.handleChange}>

                        <MenuItem value='hex'>HEX- fffff</MenuItem>
                        <MenuItem value='rgb'>rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>rgba - rgba(255,255,255,0.1)</MenuItem>


                    </Select>
                    </div>
                

                <div>
                <Snackbar 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={3000}
                message={<span>Format changed</span>}
                ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                onClose={this.closeSnackBar}
                action={[
                <IconButton onClick={this.closeSnackBar}>
                    <CloseIcon />
                </IconButton>]}
                />
                </div>


            </header>



        );

    }

}

export default Navbar;
