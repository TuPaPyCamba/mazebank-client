
const HeaderBox = ({type, title, subtext, user}) => {
    return (
        <div className="private-header-box">
            <h1 className="private-header-box-title">
                {title}
                {type === "greeting" && <span className="text-MazeRedColor">&nbsp;{user}</span>}
            </h1>
            <p className=".private-header-box-subtext">{subtext}</p>
        </div>
    )
}

export default HeaderBox
