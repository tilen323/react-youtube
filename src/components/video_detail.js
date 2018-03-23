import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId; // Same as const url = `https://www.youtube.com/embed/$(videoId)`; - it uses ` (alt + 7) not '
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;