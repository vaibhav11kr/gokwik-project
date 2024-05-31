import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-[#01125E] w-[100vw] h-[100vh] flex justify-center items-center box-border md:relative">
      <div className="absolute hidden md:flex md:items-right md:bg-white md:w-[95vw] md:h-[75vh] md:top-16">
        
        <p className="text-[#8493A7] text-xs font-bold absolute bottom-4 left-6">Need help? <span className="text-[#3E92E9] text-xs font-bold">Contact Us</span></p>
      </div>
      <Login />
      <div className="hidden md:flex z-20 absolute md:bottom-14 md:right-32 lg:right-40">
        <Footer />
      </div>
    </div>
  );
}

export default App;
