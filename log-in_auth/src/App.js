import Form from "./components/Form";


function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
      <Form />

      </div>
      <div className="hidden lg:flex relative h-full w-1/2 items-center justify-center bg-gray-200">

        
        {/* Left Panel Styling */}
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce rounded-full text-center flex justify-center items-center text-white font-semibold">Localify</div>
        <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0" />


      </div>
    </div>
  );
}

export default App;
