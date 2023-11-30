import './style.scss'
import 'boxicons'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className="container-custom">
                <ul className="footer-item">CNG Việt Nam
                    <li className='mt-3'>Giới Thiệu</li>
                    <li>Tiện Ích Online</li>
                    <li>Thẻ Quà Tặng</li>
                    <li>Tuyển Dụng</li>
                    <li>Liên Hệ Quảng Cáo</li>
                    <li>Dành Cho Đối Tác</li>
                </ul>

                <ul className="footer-item">Điều Khoản Sử Dụng
                    <li className='mt-3'>Điều Khoản Chung</li>
                    <li>Điều Khoản Giao Dịch</li>
                    <li>Chính sách thanh toán</li>
                    <li>Chính sách bảo mật</li>
                    <li>Câu hỏi thường gặp</li>
                </ul>

                <ul className="footer-item">Kết Nối Với Chúng Tôi
                    <div className="social-icon flex mt-3">
                        <img src="	https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-social-footer-40.png" alt="" />
                    </div>

                    <img src='https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG' alt="da-thong-bao" />
                </ul>

                <ul className="footer-item">Chăm Sóc Khách Hàng
                    <li className='mt-3'>Hotline: 1900 6017</li>
                    <li>Giờ làm việc: 8:00 - 22:00</li>
                    <li>Email hỗ trợ: support@cinegala.vn</li>
                </ul>
            </div>
            <div className="copyright">
                © 2021 Công Ty Cổ Phần CNG Việt Nam | Allright Reserved
            </div>
        </div>
    )
}


export default Footer
