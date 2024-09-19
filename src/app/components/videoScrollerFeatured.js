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
        <div className="flex space-x-4 mt-5 ml-0 md:ml-10 mx-auto overflow-x-auto">
            {videos.map((video) => {
                const youtubeVideoId = extractYouTubeId(video.link);
                return (
                    <a href={video.link} rel="videoLink" className="block flex-shrink-0 md:w-1/3"> {/* Slightly increased width */}
                        {youtubeVideoId ? (
                            <img
                                className="w-full h-60 border-4 border-gray-300 object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                                src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                                alt={`Thumbnail for video ${youtubeVideoId}`}
                            />
                        ) : (
                            <p>Invalid video Link</p>
                        )}
                    </a>
                );
            })}
        </div>



    );
}

export default VideoScrollerFeatured;
