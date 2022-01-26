import React from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import PatreonIcon from './icons/PatreonIcon';
import StowMarinesIcon from './icons/StowMarinesIcon';

const Footer = () => {
  return (
    <footer>
      <div className="footerBorder" />
      <div className="wrapper">
        <a href="https://stowmarines.com/" target="_blank">
          <div className="icon stowmarines">
            <div className="tooltip">Website</div>
            <span>
              <StowMarinesIcon />
            </span>
          </div>
        </a>
        <a href="https://twitter.com/StowMarines"  target="_blank">
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span>
              <TwitterIcon />
            </span>
          </div>
        </a>
        <a href="https://www.instagram.com/stow_marines_official/"  target="_blank">
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <InstagramIcon />
            </span>
          </div>
        </a>
        <a href="https://github.com/StowMarines" target="_blank">
          <div className="icon github">
            <div className="tooltip">Github</div>
            <span>
              <GitHubIcon />
            </span>
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UCjm7li3Rawl7qoRBhiZ9P2w"  target="_blank">
          <div className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span>
              <YouTubeIcon />
            </span>
          </div>
        </a>
        <a href="https://www.patreon.com/stowmarines"  target="_blank">
          <div className="icon patreon">
            <div className="tooltip">Patreon</div>
            <span>
              <PatreonIcon />
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
