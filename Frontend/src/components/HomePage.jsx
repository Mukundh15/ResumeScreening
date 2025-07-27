import Navbar from "./Navbar";
import Footer from "./Footer";
import ResumeInfo from "./ResumeInfo";
import AboutApp from "./AboutApp";
import UploadResume from "./UploadResume";
function HomePage(){
    return (
        <div className="container">
            <Navbar></Navbar>
            <hr />
            <ResumeInfo></ResumeInfo>
            
            <UploadResume></UploadResume>

            <AboutApp></AboutApp>
            <hr />
            <Footer></Footer>
        </div>
    );
}
export default HomePage;