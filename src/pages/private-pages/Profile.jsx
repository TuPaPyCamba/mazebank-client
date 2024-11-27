import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [userProfileData, setUserProfileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/user/profiledata", {
                    withCredentials: true // envía la cookie automáticamente
                });
                setUserProfileData(response.data.user)
            } catch (error) {
                setError("Error al obtener los datos del dashboard");
                console.error(error)
            }
        };
        fetchData();
    }, []);

    // Manejo de la visualización
    if (error) return <div>{error}</div>;
    if (!userProfileData) return <div>Cargando...</div>;

    return (
        <>
            {/* <div className="flex flex-row caret-transparent">
                <Link to={'/dashboard/settings'} className="text-lg hover:text-MazeRedColor">Settings&nbsp;</Link>
                <p className="text-xl">{' > '}</p>
                <Link to={'/dashboard/settings/profile'} className="text-lg hover:text-MazeRedColor">&nbsp;Profile</Link>
            </div> */}
            <h2 className="private-header-box-title caret-transparents caret-transparent">Maze Bank Profile</h2>
            <div className="flex flex-col w-full max-w-[900px] mx-auto gap-10">
                <div className="p-4 mx-auto h-56 w-56 rounded-full shadow-2xl bg-cover" style={{backgroundImage: `url(${userProfileData?.profileImg})`}} />
                <div className="flex flex-col gap-3 p-10 bg-white rounded-xl border border-gray-200 shadow-xl">
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">User Name:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.userName}</p>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Name:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.name}</p>
                    </div>
                    <div className="flex justify-center flex-col items-center" >
                        <label className="font-semibold text-xl caret-transparent">Surnames</label>
                        <div className="flex flex-col justify-center" >
                            <div className="flex justify-center" >
                                <label className="font-semibold text-xl caret-transparent">Paternal:&nbsp;</label>
                                <p className="text-xl" >{userProfileData?.surnames?.paternal}</p>
                            </div>
                            <div className="flex justify-center" >
                                <label className="font-semibold text-xl caret-transparent">Maternal:&nbsp;</label>
                                <p className="text-xl" >{userProfileData?.surnames?.maternal}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Email:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.email}</p>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Phone Number:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.phoneNumber}</p>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Birthdate:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.birthdate}</p>
                    </div>
                    <div className="flex justify-center flex-col items-center" >
                        <label className="font-semibold text-xl caret-transparent">Place of Birth</label>
                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center" >
                                <label className="font-semibold text-xl caret-transparent">City:&nbsp;</label>
                                <p className="text-xl" >{userProfileData?.placeOfBirth?.city}</p>
                            </div>
                            <div className="flex justify-center" >
                                <label className="font-semibold text-xl caret-transparent">State:&nbsp;</label>
                                <p className="text-xl" >{userProfileData?.placeOfBirth?.state}</p>
                            </div>
                            <div className="flex justify-center" >
                                <label className="font-semibold text-xl caret-transparent">Country:&nbsp;</label>
                                <p className="text-xl" >{userProfileData?.placeOfBirth?.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Address:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.address}</p>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">RFC:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.rfc}</p>
                    </div>
                    <div className="flex justify-center" >
                        <label className="font-semibold text-xl caret-transparent">Occupation:&nbsp;</label>
                        <p className="text-xl" >{userProfileData?.occupation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
