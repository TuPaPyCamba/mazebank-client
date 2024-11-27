// import { logoutAccount } from '@/lib/actions/user.actions'
// import { useRouter } from 'next/navigation'

import LogOut from '../../../assets/icons/logout.svg'

const Footer = ({ user, type = 'desktop' }) => {
    // const router = useRouter();

    const handleLogOut = async () => {
        // const loggedOut = await logoutAccount();

        // if (loggedOut) router.push('/sign-in')
    }

    return (
        <footer className="footer-sidebar">
            <div className={type === 'mobile' ? 'footer-sidebar_img-mobile' : 'footer-sidebar_img'} style={{backgroundImage : `url(${user?.profileImg})`}}>
            </div>

            <div className={type === 'mobile' ? 'footer-sidebar_email-mobile' : 'footer-sidebar_email'}>
                <h1 className="text-14 truncate text-gray-700 font-semibold">
                    {user?.userName}
                </h1>
                <p className="text-14 truncate font-normal text-gray-600">
                    {user?.email}
                </p>
            </div>

            <button className="footer-sidebar_image" onClick={handleLogOut}>
                <img src={LogOut} alt="jsm" className='relative size-6'/>
            </button>
        </footer>
    )
}

export default Footer