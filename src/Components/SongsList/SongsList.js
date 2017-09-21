import React from 'react';
import PropTypes from 'prop-types';
import './SongsList.css'

const SongsList = ({ status, songs }) => (

  <section className="SongsListSection">
    <h3>Songs</h3>

    <div className="SongsListContainer">

      <div className="SongsList">
        {songs && songs.map(song => (
          <div key={song.title}>{song.title}</div>
        ))}
      </div>
      
      <div className="SongsStatus">
        {status}
      </div>
    </div>

  </section>
)

SongsList.propTypes = {
  songs: PropTypes.array
}

export default SongsList;
