import React from 'react';

const Main = () => {



  return (
    <>
      <div>
        <div className="main_title">
          <h1>StowMarines Interface</h1>
        </div>
        <div className="main_title">
          <div className="playContainer">
            <a href="#" onClick={() => electron.gameAPI.loadArma()} className="playButton">
              START GAME
            </a>
          </div>
          <br />
          <div className="updateContainer">
            <a href="#" onClick={() => electron.gameAPI.checkForUpdates()} className="updateButton">
              Check For Updates
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
