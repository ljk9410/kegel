import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App" style={{ height: window.innerHeight }}>
      <MainContent />
      {/* <video muted autoPlay loop>
        <source src="/videos/kegel_sticky.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
