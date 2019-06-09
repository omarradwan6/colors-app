import React from 'react';
import './ColorBox.css'
import {Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SingleColorPalette from './SingleColorPalette'



class ColorBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = { copied: false }
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1500);

    })
  }

  render() {
    const { background, name, paletteId, id, palette } = this.props

    console.log(palette,id)

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='ColorBox'>
          <div style={{ background }} className={'copy-overlay ' + (this.state.copied ? 'show' : '')} />
          <div className={'copy-msg '+ (this.state.copied ? 'show' : '')}>
            <h1>Copied</h1>
            <p>{background}</p>
          </div>

          <div className='Copy-container'>
            <div className='BoxContent'>
              <span>{name}</span>
            </div>
          </div>
          <button className='copy-button'>Copy</button>
          <Link to={`/palette/${paletteId}/${id}`} onClick={e=> e.stopPropagation()} >
          <span className='ColorBox-more'>More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }

}

export default ColorBox;
