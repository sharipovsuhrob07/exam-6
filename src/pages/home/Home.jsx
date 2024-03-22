import "./Home.scss";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import HomeMain from "../../components/home_main/HomeMain";

const Home = () => {
  return (
    <>
      <div className="home">
        <NavBar />
        <div className="navbar_homemain">
          <Header />
          <HomeMain />
        </div>
      </div>
    </>
  );
};

export default Home;
