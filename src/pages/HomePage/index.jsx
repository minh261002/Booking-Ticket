import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeCarousel from '../../template/HomeTemplate/HomeCarousel'
import HomeCinema from '../../template/HomeTemplate/HomeCinema/HomeCinema'
import HomeMovie from '../../template/HomeTemplate/HomeMovie'

import './style.scss'

const HomePage = () => {
    return (
        <div className='home_page'>
            <Header />
            <HomeCarousel />
            <HomeMovie />
            <HomeCinema />
            <Footer />
        </div>
    )
}

export default HomePage
