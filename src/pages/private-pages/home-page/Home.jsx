import { useEffect, useState } from "react"
import axios from "axios"
import config from "../../../config"

import HeaderBox from "../components/HeaderBox"
import TotalBalanceBox from "../components/TotalBalanceBox"

const Home = () => {
    const [userBasicData, setUserBasicData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.serverNet}${config.PORT}/api/user/basicdata`, {
                    withCredentials: true 
                });
                setUserBasicData(response.data.user)
            } catch (error) {
                setError("Error al obtener los datos del dashboard");
                console.error(error)
            }
        };
        fetchData();
    }, []);

    // Manejo de la visualización
    if (error) return <div>{error}</div>;
    if (!userBasicData) return <div>Cargando...</div>;

    return (
        <header className="private-home-header">
            <HeaderBox type="greeting" title="Welcome" user={userBasicData.name} subtext="Welcome to Maze Bank Workspace, manage your account and transactions efficiently." />
            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={7000102222.122} />
        </header>
    )
}

export default Home
