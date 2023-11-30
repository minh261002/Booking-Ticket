import { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

import BoxMovie from '../../../components/BoxMovie/BoxMovie';

const { TabPane } = Tabs;

const TabMovie = () => {
    const [phimDangChieu, setPhimDangChieu] = useState([]);
    const [phimSapChieu, setPhimSapChieu] = useState([]);

    const slickSettings = {
        infinite: true,
        slidesToShow: 5,
        rows: 2,
        slidesToScroll: 5,
        centerMode: false,
        variableWidth: false,
        arrow: true
    };

    useEffect(() => {
        fetch('http://localhost:3001/movie')
            .then(response => response.json())
            .then(data => {
                if (data.content && Array.isArray(data.content)) {
                    const movieData = data.content;
                    const filteredNowShowingMovies = movieData.filter(movie => movie.dangChieu === true);
                    setPhimDangChieu(filteredNowShowingMovies);

                    const filteredUpcomingMovies = movieData.filter(movie => movie.sapChieu === true);
                    setPhimSapChieu(filteredUpcomingMovies);

                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!phimDangChieu || !phimSapChieu) {
        return <div className='container mt-5'>Không tìm thấy phim</div>;
    }

    return (
        <div className="home-movie">
            <div className='container-custom'>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Phim Đang Chiếu" key="1">
                        <Slider {...slickSettings}>
                            {phimDangChieu.map(movie => (
                                <div key={movie.maPhim} className='carousel-custom'>
                                    <BoxMovie movies={[movie]} />
                                </div>
                            ))}
                        </Slider>
                    </TabPane>
                    <TabPane tab="Phim Sắp Chiếu" key="2">
                        <Slider {...slickSettings}>
                            {phimSapChieu.map(movie => (
                                <div key={movie.maPhim}>
                                    <BoxMovie movies={[movie]} />
                                </div>
                            ))}
                        </Slider>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default TabMovie;
