import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPos({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
