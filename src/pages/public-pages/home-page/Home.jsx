import Slider from '../../../components/UI/Slider.jsx'
import '../../../styles/global.css'

import Location from '../../../assets/icons/location.svg'
import Foreclosures from '../../../assets/img/Foreclosures.png'
import Services from '../../../assets/img/services.png'

const Home = () => {

    const items = [
        {
            title: 'Maze Bank Services',
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd022e9d-8c1a-4f62-9908-0e571711aae2/dfn4mha-f26ff983-2954-4bb4-a8fa-1e64ac5df14c.jpg/v1/fill/w_1600,h_900,q_75,strp/maze_bank_tower__us_bank_tower___by_remyras_dfn4mha-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZmQwMjJlOWQtOGMxYS00ZjYyLTk5MDgtMGU1NzE3MTFhYWUyXC9kZm40bWhhLWYyNmZmOTgzLTI5NTQtNGJiNC1hOGZhLTFlNjRhYzVkZjE0Yy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YXplduucLd5fcLVg95B6weUoX_foxWMT10_D9trTnRY",
            description: 'Conoce nuestros servicios',
            link: '/ruta1',
        },
        {
            title: 'Tarjeta 2',
            image: "https://www.pcmgames.com/wp-content/uploads/2019/07/GTA-Online-The-Diamond-Casino-Resort-1-1.jpg",
            description: 'Descripción de la tarjeta 2',
            link: '/ruta2',
        },
        {
            title: 'Tarjeta 3',
            image: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k329/0d23a40a068f5978e7185c491872d1c14ebe25fc.jpg",
            description: 'Descripción de la tarjeta 2',
            link: '/ruta2',
        },
        {
            title: 'Tarjeta 4',
            image: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k329/ba8b937b71aede410b00d7dbb07d6756364bf642.jpg",
            description: 'Descripción de la tarjeta 2',
            link: '/ruta2',
        },
    ];

    return (
        <main className='bg-[#F4F4F4]'>

            <section className='w-[100vw] md:w-100w h-[80vh] md:h-[85vh]'>
                <Slider interval={6000} >
                    {items.map((item, index) => (
                        <div key={index} className='slider-item'
                            style={{ backgroundImage: `url(${item.image})` }} >
                            {/* Información sobre la imagen */}
                            <div className="bg-black w-full h-full bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">

                                <h2 className="text-2xl font-bold">{item.title}</h2>
                                <p className="text-lg mt-2">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="text-blue-300 mt-4 underline"
                                >
                                    Leer más
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className='flex justify-center'>
                <div class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
                    <div class="bg-gray-300 p-4">Elemento 1</div>
                    <div class="bg-gray-300 p-4">Elemento 2</div>
                    <div class="bg-gray-300 p-4">Elemento 3</div>
                    <div class="bg-gray-300 p-4">Elemento 4</div>
                    <div class="bg-gray-300 p-4">Elemento 5</div>
                    <div class="bg-gray-300 p-4">Elemento 6</div>
                    <div class="bg-gray-300 p-4">Elemento 7</div>
                    <div class="bg-gray-300 p-4">Elemento 8</div>
                </div>
            </section>
            <section className='w-full py-16 bg-[#F4F4F4]'>
                <div className='w-85w flex flex-col items-center justify-center text-center gap-16 mx-auto lg:flex-row 1400:max-w-[1200px]'>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-MazeRedColor mx-auto rounded-full shadow-2xl'>
                            <img src={Location} alt="" className='size-52 m-auto' />
                        </div>
                        <h2 className='text-3xl font-semibold 900:text-4xl'>Sucursales y cajeros</h2>
                        <p className='text-MazeRedColor font-semibold'>Siempre cerca de ti</p>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-MazeRedColor mx-auto rounded-full shadow-2xl'>
                            <img src={Services} alt="" className='size-52 m-auto' />
                        </div>
                        <h2 className='text-3xl font-semibold 900:text-4xl'>Atención al cliente</h2>
                        <p className='text-MazeRedColor font-semibold'>Contacta con nosotros</p>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <div className='bg-MazeRedColor mx-auto rounded-full shadow-2xl'>
                            <img src={Foreclosures} alt="" className='size-52 m-auto' style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))" }} />
                        </div>
                        <h2 className='text-3xl font-semibold 900:text-4xl'>Foreclosures</h2>
                        <p className='text-MazeRedColor font-semibold'>Maze Bank Foreclosures</p>
                    </div>
                </div>
            </section>
            <section className='bg-MazeGrayback py-10 w-full'>
                <div className='w-85w mx-auto 1400:max-w-[1200px]'>
                    <h2 className='text-5xl pb-10 text-center font-semibold'>Descubre Nuetras Tarjetas</h2>
                    <div className='flex flex-col mx-auto 600:max-w-[550px] md:max-w-full md:flex-row gap-12'>
                        <div className='border rounded-lg shadow-md p-10 bg-MazeGray'>
                            <h2 className='text-center mb-8 text-3xl'>Credito</h2>
                            <img src="https://th.bing.com/th/id/R.33fcf34322d6efc37f3e40db87f15fd5?rik=K8j9Jlf0MjaALg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f160000%2fvelka%2fcredit-card-front.jpg&ehk=jGOxEiTEuFCw2H%2fMZD5ZJFbKTuT32dosUkNKXOYjDLs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className='border rounded-lg shadow-md p-10 bg-MazeGray'>
                            <h2 className='text-center mb-8 text-3xl'>Debito</h2>
                            <img src="https://th.bing.com/th/id/R.33fcf34322d6efc37f3e40db87f15fd5?rik=K8j9Jlf0MjaALg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f160000%2fvelka%2fcredit-card-front.jpg&ehk=jGOxEiTEuFCw2H%2fMZD5ZJFbKTuT32dosUkNKXOYjDLs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home