import { SideBar, SideBarItem } from '../components/UI/SideBar1'

import { FaMoneyCheckDollar, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiFileTransferFill, RiBankFill } from "react-icons/ri";
import { IoIosSettings, IoIosHelpCircle, IoIosHome } from "react-icons/io";

const UITest = () => {
    return (
        <div className='flex flex-row'>
            <SideBar>
                <SideBarItem icon={<IoIosHome size={20} />} text='Home' active/>
                <SideBarItem icon={<FaMoneyCheckDollar size={20} />} text='My Accounts' />
                <SideBarItem icon={<RiFileTransferFill size={20} />} text='Transaction History' />
                <SideBarItem icon={<FaMoneyBillTransfer size={20} />} text='Transfer Funds' />
                <SideBarItem icon={<RiBankFill size={20} />} text='Connect Bank' />
                <hr className='my-3' />
                <SideBarItem icon={<IoIosSettings size={20} />} text='Settings' />
                <SideBarItem icon={<IoIosHelpCircle size={20} />} text='Help' />
            </SideBar>
            <div className='w-full bg-MazeGray'>WELLCOME BACK MADERFUCKER</div>
        </div>
    )
}

export default UITest