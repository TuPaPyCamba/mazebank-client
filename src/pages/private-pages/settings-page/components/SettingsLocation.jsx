import { Link } from "react-router-dom"

const SettingsLocation = ({ route, page, secondRoute = null, secondPage = null }) => {
    return (
        <div className="flex flex-row caret-transparent">
            <Link to={'/dashboard/settings'} className="text-lg hover:text-MazeRedColor">Settings&nbsp;</Link>
            <p className="text-xl">{' > '}</p>
            <Link
                to={`/dashboard/settings/${route}`}
                className={`text-lg hover:text-MazeRedColor ${!secondPage ? 'text-MazeRedColor' : ''}`}
            >
                &nbsp;{page}
            </Link>
            {secondPage && (
                <>
                    <p className="text-xl">{' > '}</p>
                    <Link
                        to={`/dashboard/settings/${route}/${secondRoute}`}
                        className="text-lg hover:text-MazeRedColor text-MazeRedColor"
                    >
                        &nbsp;{secondPage}
                    </Link>
                </>
            )}
        </div>
    );
};

export default SettingsLocation
