
import { useRef } from "react";

import video from "assets/videos/sample-mp4-file.mp4";
import useVideoPlayer from "hooks/useVideoPlayer";

const VideoPlayer = () => {
    const videoElement = useRef<HTMLVideoElement>(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute
    } = useVideoPlayer(videoElement);

    return (
    <div className="container">
        <div className="video-wrapper">
        <video src={ video } ref={ videoElement } onTimeUpdate={ handleOnTimeUpdate } />

        <div className="controls">
            <div className="actions">
                <button onClick={ togglePlay }>
                    { (!playerState.isPlaying) ? <i> &#62; </i> : <i> | | </i>  }
                </button>
            </div>

            <input type="range" min="0" max="100"
                value={ playerState.progress } onChange={ (e) => handleVideoProgress(e) } />

            <select className="velocity" value={ playerState.speed } onChange={ (e) => handleVideoSpeed(e) } >
                <option value="0.50">0.50x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="2">2x</option>
            </select>

            <button className="mute-btn" onClick={ toggleMute }>
            { (!playerState.isMuted) ? <i> mute </i> : <i> unmute </i> }
            </button>
        </div>
        </div>
    </div>
    );
};

export default VideoPlayer;