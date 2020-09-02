import React, {useCallback, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio.css'
import {useDispatch, useSelector} from "react-redux";
import {setAudioPlayed, setAudioPlaying, setAudioSrc} from "~/store";
import {getRandomSong} from "~/birds/birds";


export const Player = () => {
    const audioSrc = useSelector(state => state.audioSrc)
    const audioIndex = useSelector(state => state.audioIndex)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAudioSrc(getRandomSong(audioIndex)))
    }, [])
    const onPlay = useCallback(() => {
        dispatch(setAudioPlaying(true))
        dispatch(setAudioPlayed(true))
    }, [])
    const onPause = useCallback(() => {
        dispatch(setAudioPlaying(false))
    },[])

    return (
        <AudioPlayer
            src={audioSrc}
            autoPlayAfterSrcChange={false}
            onPlay={onPlay}
            onPause={onPause}
        />
    )
};


