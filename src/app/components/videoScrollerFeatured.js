import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from next/image

function VideoScrollerFeatured() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://for5-backend-quiz.vercel.app/api/homepageVideoLink/Featured');
                const data = await response.json();
                setVideos(data);
            } catch (err) {
                setError('Failed to fetch videos'); // Set error state
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center">{error}</div> // Show error message
        );
    }

    return (
        <div className="relative flex space-x-4 mt-5 ml-0 md:ml-5 mx-auto overflow-x-auto">
            {videos.map((video) => {
                const youtubeVideoId = extractYouTubeId(video.link);
                return (
                    <a key={video.id} href={video.link} rel="videoLink" className="block flex-shrink-0 md:w-1/3">
                        {youtubeVideoId ? (
                            <Image
                                className="w-full h-60 border-4 border-gray-300 object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-white"
                                src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                                alt={`Thumbnail for video ${youtubeVideoId}`}
                                width={400} // Set a width
                                height={225} // Set a height
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
