import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const BoxMovie = ({ movies }) => {
    return (
        <div className="movie-list p-2">
            {movies.map(movie => (
                <div key={movie.maPhim} className="box-item">
                    <img className='img-movie' src={movie.hinhAnh} alt={movie.tenPhim} />
                    <div className="box-option">
                        <p className='box-movie-name'>{movie.tenPhim}</p>
                        <div className="box-movie-btn flex">
                            <button><Link to={`/details/${movie.maPhim}`}>Xem Chi Tiết</Link></button>
                            <button>
                                <Link to={`/booking/${movie.maPhim}`}>Đặt Vé</Link>
                            </button>
                        </div>
                    </div>

                    <div className="set">
                        {movie.maNhom}
                    </div>
                </div>
            ))}
        </div>
    );
}

BoxMovie.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default BoxMovie;
