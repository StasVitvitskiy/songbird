import React, {useCallback, useEffect, useRef, useState} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio.css'
import {useDispatch, useSelector} from "react-redux";
import {setAudioPlayed, setAudioPlaying, setAudioSrc} from "~/store";
import win from '../media/win.mp3'
import lose from '../media/lose.mp3'
import perfScore from '../media/ultimateWin.mp3'

const PERFECT_SCORE = 30

const getRandomArbitrary = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
}


export const Player = ({ src, setAudioSrcInStore }) => {
    const audioSrc = useSelector(state => state.audioSrc)
    const audioIndex = useSelector(state => state.audioIndex)
    const selectedBird = useSelector(state => state.selectedBird)
    const birdsData = useSelector(state => state.birdsData)
    const dispatch = useDispatch()
    const score = useSelector(state => state.score);
    const isAnswerCorrect = useSelector(state => state.isAnswerCorrect)
    const [isAnswerCorrectOld, setIsAnswerCorrectOld] = useState(isAnswerCorrect)

    useEffect(() => {
        if (isAnswerCorrectOld === false && isAnswerCorrect === true) {
            player.current.audio.current.pause()
            const audioSrc = score === PERFECT_SCORE ? perfScore : win
            const tmpPlayer = new Audio(audioSrc);
            tmpPlayer.play();
        } else if(selectedBird) {
            new Audio(lose).play();
        }
        setIsAnswerCorrectOld(isAnswerCorrect)
    },[isAnswerCorrect, selectedBird])
    useEffect(() => {
        if(setAudioSrcInStore && birdsData.length) {
            dispatch(setAudioSrc(
                birdsData[audioIndex][
                    getRandomArbitrary(
                        0,
                        birdsData[
                            audioIndex
                        ].length
                    )
                ].audio
            ))
        }
    }, [audioIndex, birdsData])
    const onPlay = useCallback(() => {
        dispatch(setAudioPlaying(true))
        dispatch(setAudioPlayed(true))
    }, [])
    const onPause = useCallback(() => {
        dispatch(setAudioPlaying(false))
    },[])
    const player = useRef(null)

    return (
        <AudioPlayer
            src={src || audioSrc}
            autoPlayAfterSrcChange={false}
            onPlay={onPlay}
            onPause={onPause}
            ref={player}
        />
    )
};


