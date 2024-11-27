import SettingsFormContainer from "../../components/SettingsFormContainer";
import SettingsLocation from "../../components/SettingsLocation"

const AccountUpdate = () => {
    const page = 'Update-Account';
    return (
        <>
            <SettingsLocation route={'account'} page={'Account'} secondRoute={'updateaccount'} secondPage={page}/>
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <SettingsFormContainer />
        </>
    )
}

export default AccountUpdate
