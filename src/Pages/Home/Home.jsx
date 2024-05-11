import Feature from "../../Components/Feature/Feature";
import Message from "../../Components/Message/Message";
import Banner from "../../Components/Navbar/Banner/Banner";
import Stat from "../../Components/Stat/Stat";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Message/>
            <Feature/>
            <Stat/>
        </div>
    );
};

export default Home;