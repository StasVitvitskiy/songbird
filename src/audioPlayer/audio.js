import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio.css'


export const Player = () => (
    <AudioPlayer
        autoPlay
        src="http://example.com/audio.mp3"
        onPlay={e => console.log("onPlay")}
        // other props here
    />
);