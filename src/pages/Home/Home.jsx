import Navbar from "../../shared/Navbar/Navbar";
import backgroundImage from '../../assets/background_image.png'

const Home = () => {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0 z-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className="relative z-10">
                <Navbar></Navbar>
                <div className="grid grid-cols-3 ">
                    <div className="col-span-1">
                        <h2 className="text-5xl font-bold text-white">Cox's bazar</h2>
                        <p className="text-white">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


