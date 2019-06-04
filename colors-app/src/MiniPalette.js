import React from 'react'
import { withStyles } from '@material-ui/styles';


const styles = {

    root: {
        border: '1px solid black',
        backgroundColor: "white",
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "& hover": {
            cursor: 'pointer'
        }

    },
    colors: {
        backgroundColor: "#dae1e4",
        height:'150px',
        width:'100%',
        borderRadius:'5px',
        overflow:'hidden'
    }
    , title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem'
    },
    miniColor:{
        height:'25%',
        width:'20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-3.5px'
    }
}

class MiniPalette extends React.Component {




    render() {
        const { classes } = this.props
        const { paletteName, emoji, colors } = this.props.palette

        const miniColorBoxes = colors.map((color) => {

            return <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>


        })
        return (

            <div className={classes.root}>
                <div className={classes.colors}>

                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>



            </div>


        )

    }

}




export default withStyles(styles)(MiniPalette)