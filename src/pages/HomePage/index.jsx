import Header from '../../components/Header'
import HomeCarousel from '../../template/HomeTemplate/HomeCarousel'
import './style.scss'

const HomePage = () => {
    return (
        <div className='home_page'>
            <Header />
            <HomeCarousel />
        </div>
    )
}

export default HomePage
