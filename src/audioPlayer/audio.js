import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio.css'


export const Player = () => (
    <AudioPlayer
        src = ''
        autoPlayAfterSrcChange={false}
        onPause={false}
    />
);


