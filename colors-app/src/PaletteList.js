import React from 'react';
import {Link} from 'react-router-dom'




class PaletteList extends React.Component {

    render() {

        const { palettes } = this.props

        return (
            <div>
            {
                palettes.map((palette) => {

                    return <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>

                })
            }
            </div>
        );
    }

}

export default PaletteList;
