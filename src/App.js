import "./styles/App.scss";
import Routers from "./routes/Routers";

import { useEffect, useState } from "react";
import size_error from "./assets/size_error.jpg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='App'>
      {windowWidth > 768 ? (
        <div className='size-error'>
          <img src={size_error} alt='device width too big' />
        </div>
      ) : (
        <div>
          <Routers />
        </div>
      )}
    </div>
  );
}

export default App;
