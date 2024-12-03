import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import x from '../assets/x.png';
import youtube from '../assets/yt.png';


const Home = () => {
    return(
        <div className='home'>
            <div className='home-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='home-redes'>
                <a href="https://web.facebook.com/ClubDePescaVCP?_rdc=1&_rdr" ><img src={facebook} alt="" className='facebook'/></a>
                <a href="https://www.instagram.com/clubdepescavcp/?hl=es-la"><img src={instagram} alt="" className='redes' /></a>
                <a href="https://x.com/clubdepescavcp"><img src={x} alt="" className='redes' /></a>
                <a href="https://www.youtube.com/channel/UCm43mU324gzHi7qfgGyjEPA"><img src={youtube} alt="" className='redes' /></a>
            </div>
        </div>
    )
}

export default Home;