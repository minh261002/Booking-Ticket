import './style.scss'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__top">
                <p>CNG Ưu Đãi Đồng Giá 99K Đối Với U22</p>
            </div>

            <div className="header__middle">
                <div className="container-custom">
                    <div className="header__logo">
                        <img src={logo} alt="cinegala logo" />
                    </div>

                    <ul className="header__menu flex items-center justify-evenly">
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/movie">Phim</Link></li>
                        <li><Link to="/cinema">Rạp Chiếu</Link></li>
                        <li><Link to="/showtimes">Lịch Chiếu</Link></li>
                        <li><Link to="/news">Tin Tức</Link></li>
                        <li><Link to="/app">Ứng Dụng</Link></li>
                    </ul>

                    <div className="header__icon-other flex justify-evenly ">
                        <div className="icon-user">
                            <box-icon name='user' flip='horizontal' ></box-icon>
                        </div>
                        <div className="login">
                            <Link to="/login">Đăng Nhập</Link>
                        </div>
                        |
                        <div className="register">
                            <Link to="/register">Đăng Ký</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
