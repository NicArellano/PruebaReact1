import Footer from "./components/Footer";
import Heading from "./components/Heading";
import MiApi from "./components/MiApi";





function App() {

  return (
    <>
      <div id="box">
        <div className="bg-success heading d-flex justify-content-center text-center " id="heading">
          <Heading />
        </div>



        <div id="body">
          <div className="pt-4" id="card">
            <MiApi />
          </div>
        </div>



        <div className="bg-success d-flex justify-content-center text-center fw-bold" id="foot">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
