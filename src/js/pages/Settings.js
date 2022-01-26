import React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SettingInputText from "../components/SettingInputText";

const Settings = () => {
  const [armaDirectory, setArmaDirectory] = useState("");
  const [armaMods, setArmaMods] = useState("");

  const [optionalMods, setOptionalMods] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const [noPause, setNoPause] = useState(false);
  const [hugePages, setHugePages] = useState(false);
  const [noSplash, setNoSplash] = useState(false);
  const [cpuCount, setCpuCount] = useState('');
  const [exThreads, setExThreads] = useState('');
  const [maxMemory, setMaxMemory] = useState();

  useEffect(() => {
    var data = JSON.parse(electron.filesApi.getConfig("gameDirectories"));
    console.log(data);
    if(data["directory"] !== undefined) setArmaDirectory(data["directory"]);
    if(data["modsDirectory"] !== undefined) setArmaMods(data["modsDirectory"]);


    var data = JSON.parse(electron.filesApi.getConfig("gameParameters"));
    console.log(data);
    if(data["optionalMods"] !== undefined) setOptionalMods(data["optionalMods"]);
    if(data["menu"] !== undefined) setMainMenu(data["menu"]);
    if(data["noPause"] !== undefined) setNoPause(data["noPause"]);
    if(data["hugePages"] !== undefined) setHugePages(data["hugePages"]);
    if(data["noSplash"] !== undefined) setNoSplash(data["noSplash"]);
    if(data["cpuCount"] !== undefined) setCpuCount(data["cpuCount"]);
    if(data["exThreads"] !== undefined) setExThreads(data["exThreads"]);
    if(data["maxMemory"] !== undefined) setMaxMemory(data["maxMemory"]);
  }, []);


  function saveGameDirectories() {
    console.log(armaDirectory);
    electron.filesApi.saveConfig(
      "gameDirectories",
      JSON.stringify({ directory: armaDirectory, modsDirectory: armaMods })
    );
  }

  function saveGameParameters() {
    electron.filesApi.saveConfig(
      "gameParameters",
      JSON.stringify({ "optionalMods" : optionalMods, "menu":  mainMenu, "noPause": noPause, "hugePages": hugePages,"noSplash":noSplash,"cpuCount":cpuCount, "exThreads": exThreads, "maxMemory": maxMemory})
    );
  }

  return (
    <div className="settingsContainer">
      <div>
        <h1>Game Directories</h1>
        <div className="page">
          <SettingInputText
            title="Arma 3 Directory *"
            placeholder="e.g. D:/steam/steamapps/common/Arma 3/"
            value={armaDirectory}
            changeValue={(e) => setArmaDirectory(e.target.value)}
          />
          <SettingInputText
            title="Custom Mods Directory"
            placeholder="e.g. E:/Arma 3 Mods/"
            value={armaMods}
            changeValue={(e) => setArmaMods(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            onClick={saveGameDirectories}
          >
            Save
          </Button>
        </div>
      </div>
      <br />
      <div>
        <h1>Game Parameters</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControlLabel
                label="Optional Mods"
                control={
                  <Checkbox
                    checked={optionalMods}
                    onChange={(e) => setOptionalMods(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                label="Launch To Main Menu"
                control={
                  <Checkbox
                    checked={mainMenu}
                    onChange={(e) => setMainMenu(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                label="No Pause"
                control={
                  <Checkbox
                    checked={noPause}
                    onChange={(e) => setNoPause(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                label="Huge Pages"
                control={
                  <Checkbox
                    checked={hugePages}
                    onChange={(e) => setHugePages(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                label="No Splash"
                control={
                  <Checkbox
                    checked={noSplash}
                    onChange={(e) => setNoSplash(e.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Box>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  CPU Count
                </InputLabel>
                <Select
                  color="success"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={cpuCount}
                  onChange={(e) => setCpuCount(e.target.value)}
                >
                  <MenuItem value={"null"}></MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  exThreads
                </InputLabel>
                <Select
                  color="success"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={exThreads}
                  onChange={(e) => setExThreads(e.target.value)}
                >
                  <MenuItem value={"null"}></MenuItem>
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <div className="page">
                <label className="field field_v1">
                  <input className="field__input" type="number" min="0" onChange={(e) => setMaxMemory(e.target.value)} value={maxMemory}/>
                  <span className="field__label-wrap">
                    <span className="field__label">Max Memory (Mb)</span>
                  </span>
                </label>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div className="page">
          <Button
            variant="contained"
            color="success"
            onClick={saveGameParameters}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
