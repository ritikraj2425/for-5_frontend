import { useEffect, useState } from "react"

export default function VideoScrollerLearn() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/homepageVideoLink/learn')
                const data = await response.json();
                setVideos(data);
                setLoading(false)

            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    const extractYouTubeId = (link) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([\w-]{11})/;
        const match = link.match(regex);
        return match ? match[1] : null;
    };

    if (loading) return (<p className="text-white text-1xl mt-4 text-center">Loading...</p>)

    return (

        <div className="flex space-x-4 mt-5 ml-0  md:ml-10 mx-auto overflow-x-auto">
            {videos.map((video) => {
                const youtubeVideoId = extractYouTubeId(video.link);
                return (

                    <a href={video.link} rel="videoLink" className="block flex-shrink-0 md:w-1/3">
                        {youtubeVideoId ?
                            <img
                                className="w-full h-64 border-white  object-cover rounded-lg shadow-lg"
                                src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                                alt={`Thumbnail for video ${youtubeVideoId}`}
                            /> : <p>Invalid video Link</p>}
                    </a>
                )
            })}
        </div>

    )
}