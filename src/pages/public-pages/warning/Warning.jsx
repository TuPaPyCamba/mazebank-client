import Theme from '../../../assets/img/back.png'
import Build from '../../../assets/img/build.png'

const Warning = () => {
    return (
        <div className="py-16 sm:px-10 900:px-0" style={{backgroundImage: `url(${Theme})`}}>
            <div className='bg-MazeGray 900:max-w-[900px] mx-auto sm:rounded-2xl shadow-xl px-4 py-14 text-center'>
                <h2 className='text-2xl font-semibold pb-4'>Sitio Web Aún No Disponible</h2>
                <p className='text-xl pb-4'>Inténtalo más tarde</p>
                <p className='pb-8'>Aún estamos trabajando para que pronto puedas acceder a este sitio</p>
                <img src={Build} alt="Construccion"  className='mx-auto md:scale-75'/>
            </div>
        </div>
    )
}

export default Warning
