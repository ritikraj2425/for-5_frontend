'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, PlayCircle, Clock } from 'lucide-react';

const VideoCard = ({ video }) => {
    const extractYouTubeId = (link) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([\w-]{11})/;
        const match = link.match(regex);
        return match ? match[1] : null;
    };

    const youtubeVideoId = extractYouTubeId(video.link);

    return (
        <div className="flex-shrink-0 w-80 border-2 rounded-lg overflow-hidden shadow-lg group">
            <div className="relative">
                {youtubeVideoId ? (
                    <Image
                        className="w-full h-48 object-cover"
                        src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                        alt={`Thumbnail for ${video.title || 'Untitled Video'}`}
                        width={640}
                        height={480}
                    />
                ) : (
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <p className="text-red-500">Invalid video link</p>
                    </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white opacity-75" />
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate mb-2">{video.title || 'Untitled Video'}</h3>
                <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{video.duration || 'Unknown duration'}</span>
                </div>
            </div>
        </div>
    );
};


const VideoScrollerFeatured = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://for5-backend-quiz.vercel.app/homepage/featured', {
                    method: 'GET',
                    headers: {
                        'apikey': process.env.NEXT_PUBLIC_API_KEY,
                    }
                });
                const data = await response.json();
                setVideos(data);
            } catch (err) {
                setError('Failed to fetch videos');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const scroll = (direction) => {
        const container = document.getElementById('video-container');
        if (container) {
            const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">{error}</div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => scroll('left')}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>
            <div id="video-container" className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex space-x-6 p-4">
                    {videos.map((video, index) => (
                        <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="block">
                            <VideoCard video={video} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoScrollerFeatured;