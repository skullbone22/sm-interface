import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Main = () => {
  var buttonDisabled = { pointerEvents: "none" };
  var alertShow = "block";
  var data = JSON.parse(electron.filesApi.getConfig("gameDirectories"));
  console.log(data);
  if (data["directory"] !== undefined) {
    buttonDisabled = { pointerEvents: "all" };
    alertShow = "none"
  }

  console.log(alertShow)

  return (
    <>
      <div>
        
        <div className="main_title">
          <h1>StowMarines Interface</h1>
        </div>
        <div style={{width: "50%", marginLeft: "25%", display: alertShow}}>
          <Alert severity="warning">
            To continue you must set your Arma 3 directory in settings.
          </Alert>
          <br />
        </div>
        <div className="main_title">
          <div className="playContainer">
            <a
              href="#"
              style={buttonDisabled}
              onClick={() => electron.gameAPI.loadArma()}
              className="playButton"
            >
              START GAME
            </a>
          </div>
          <br />
          <div className="updateContainer">
            <a
              href="#"
              onClick={() => electron.gameAPI.checkForUpdates()}
              className="updateButton"
            >
              Check For Updates
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
