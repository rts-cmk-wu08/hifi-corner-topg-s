import Video from '../Videos/hero_video.mp4'
import './homePageVideo.css'
const HomePageVideo = () => {
    return ( 

        <video muted loop autoPlay>
            <source src={Video} type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
     );
}
 
export default HomePageVideo;