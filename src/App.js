import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: window.innerHeight }}>
      <video className="video" muted autoPlay loop>
        <source src="/videos/kegel_sticky.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
