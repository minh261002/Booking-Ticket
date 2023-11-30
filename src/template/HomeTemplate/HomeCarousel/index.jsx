import { useState, useEffect } from 'react'
import { Carousel, Spin } from 'antd'

import './style.scss'

const HomeCarousel = () => {

    const [loading, setLoading] = useState(true);
    const [bannerData, setBannerData] = useState({});
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await fetch('http://localhost:3001/carousel');
                if (!response.ok) {
                    throw new Error('Lỗi');
                }

                const data = await response.json();
                setBannerData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchBannerData();
    }, []);

    return (
        <section className="home-carousel container-custom">
            {loading ? (
                <div className='spin-loading text-center my-5'>
                    <Spin />
                </div>
            ) : (
                <Carousel autoplay>
                    {bannerData && bannerData.content ? (
                        bannerData.content.map((banner) => (
                            <div className="carousel-item" key={banner.maBanner}>
                                <img src={banner.hinhAnh} className="w-full" alt={banner.maPhim.toString()} />
                            </div>
                        ))
                    ) : (
                        <div>Không có dữ liệu banner.</div>
                    )}
                </Carousel>
            )}
        </section>
    );

};

export default HomeCarousel;
