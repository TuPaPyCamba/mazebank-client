// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom"

// import { FaMoneyCheckDollar, FaMoneyBillTransfer } from "react-icons/fa6";
// import { RiFileTransferFill, RiBankFill } from "react-icons/ri";
// import { IoIosSettings, IoIosHelpCircle, IoIosHome } from "react-icons/io";

// import { SideBar, SideBarItem } from '../../../components/UI/SideBar1';
// import config from '../../../config';

// const Dashboard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:${config.PORT}/api/user/dashboard`, {
//                     withCredentials: true // envía la cookie automáticamente
//                 });
//                 setUserData(response.data.user)
//                 console.log(response.data.user)
//             } catch (error) {
//                 setError("Error al obtener los datos del dashboard");
//                 console.error(error)
//             }
//         };
//         fetchData();
//     }, []);

//     // Manejo de la visualización
//     if (error) return <div>{error}</div>;
//     if (!userData) return <div>Cargando...</div>;
// // 
//     return (
//         <div className='flex flex-row'>
//             <SideBar>
//                 <Link to=''><SideBarItem icon={<IoIosHome size={20}/>} text='Home' active/> </Link>
//                 <Link to=''><SideBarItem icon={<FaMoneyCheckDollar size={20}/>} text='My Accounts' /> </Link>
//                 <Link to=''><SideBarItem icon={<RiFileTransferFill size={20}/>} text='Transaction History' /> </Link>
//                 <Link to=''><SideBarItem icon={<FaMoneyBillTransfer size={20}/>} text='Transfer Funds' /> </Link>
//                 <Link to=''><SideBarItem icon={<RiBankFill size={20}/>} text='Connect Bank' /> </Link>
//                 <hr className='my-3'/>
//                 <Link to=''><SideBarItem icon={<IoIosSettings size={20}/>} text='Settings' /> </Link>
//                 <Link to=''><SideBarItem icon={<IoIosHelpCircle size={20}/>} text='Help' /> </Link>
//             </SideBar>
//             <div>
//             <h1>Bienvenido, {userData.name}</h1>
//             <p>Email: {userData.email}</p>
//             <p>ID: {userData.id}</p>
//         </div>
//         </div>
//     )
// }

// export default Dashboard