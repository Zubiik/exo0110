import { React, useEffect, useState } from 'react';
import getArtistInfo from '../../Utils/API/GET/getArtistInfo';

function MusicVideo({ musicVideoData }) {
  console.log('music dans le component', musicVideoData);
  return (
    <div>
      {musicVideoData
        ? musicVideoData.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.strTrack}</div>
                <a href={item.strMusicVid} target="_blank" rel="noreferrer">
                  <img src={item.strTrackThumb}></img>
                </a>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default MusicVideo;
