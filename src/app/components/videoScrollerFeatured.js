import { useState, useEffect } from 'react';

function VideoScrollerFeatured() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/homepageVideoLink/Featured');
                const data = await response.json();
                console.log(data)
                setVideos(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);



    const extractYouTubeId = (link) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([\w-]{11})/;
        const match = link.match(regex);
        return match ? match[1] : null;
    };

    if (loading) return <p className="text-center text-white">Loading...</p>;


    return (
        <div className="flex overflow-x-auto space-x-4 mt-5 ml-0  md:ml-10 mx-auto">
            {videos.map((video, index) => {
                const videoId = extractYouTubeId(video.link);
                return (
                    <a
                        key={index}
                        href={video.link}
                        rel="noopener noreferrer"
                        className="block flex-shrink-0 md:w-1/3"
                    >
                        {videoId ?
                            <img
                                className="w-full h-64 border-white  object-cover rounded-lg shadow-lg"
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                alt={`Thumbnail for video ${videoId}`}
                            />
                            

                        : (
                            <p className="text-red-500">Invalid video link</p>
                        )}
                    </a>

                    
                );
            })}
        </div>
    );
}

export default VideoScrollerFeatured;
