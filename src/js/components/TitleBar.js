import React from 'react';

import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import '../../css/main.css';

const TitleBar = () => {

    function closeApp(e){
        e.preventDefault();
        window.close()
      }

  return (
    <div style={HeaderStyle}>
      <div style={dragContainer}></div>
      <div style={container}>
        <button className="titleButtons titleButtonsClose" onClick={closeApp}>
          <CloseIcon />
        </button>
      </div>    
    </div>
  );
};

const HeaderStyle = {
  position: 'fixed',
  top: 0,
  width: "100%",
  display: "flex"
};

const container = {
};

const dragContainer = {
  width: "calc(100% - 28px)",
   appRegion: "drag",
   height: "30px",
  }

export default TitleBar;
