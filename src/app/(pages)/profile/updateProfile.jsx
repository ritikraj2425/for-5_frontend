import { useState } from "react";

const UpdateProfile = () => {

    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        gender: "",
        location: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
        const obj = { ...formData };
        const jwt = localStorage.getItem('jwtToken');
        const refresh = localStorage.getItem('refreshToken');
        const data = fetch(`${backend_url}/user/edit`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'content-type': 'application/json',
                'apikey': process.env.NEXT_PUBLIC_API_KEY,
                'jwttoken': jwt,
                'refreshtoken': refresh
            }
        })

        const response = await data.json();
        if (!data.ok) {
            return toast.error(`Error: ${response.message || 'Update failed'}`);
        }
        setUpdated(true);
    }

   

    const [updated, setUpdated] = useState(false);


    const getCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                        );
                        const data = await response.json();
                        const address = data.display_name || `Lat: ${latitude}, Lng: ${longitude}`;

                        setFormData({ ...formData, location: address });
                    } catch (error) {
                        alert("Failed to fetch address. Using coordinates instead.");
                        setFormData({ ...formData, location: `Lat: ${latitude}, Lng: ${longitude}` });
                    }
                },
                (error) => {
                    alert("Failed to get location. Please enable location services.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div className="md:space-y-4 space-y-2 ">
            {!updated ?
                <>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Bio"
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    {/* Location Input + Live Location Button */}
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                            className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={getCurrentLocation}
                            className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600"
                        >
                            Use Location
                        </button>
                    </div>
                    <button onClick={handleUpdateProfile} className="py-2 bg-[#100f0f] text-white w-full rounded-md">Update</button>
                </>
                :
                <div className="bg-green-500 text-white p-2 rounded-lg text-center">
                    Profile Updated Successfully.
                </div>
            }

        </div >

    )

}

export default UpdateProfile;