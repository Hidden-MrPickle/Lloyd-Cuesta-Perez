import { useState } from "react";
import logo from "/logo-panther.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/*<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>*/}
      </div>
      <div className="md:mx-36 md:grid md:grid-cols-3 gap-3 sm:grid-cols-1 sm:mx-2 items-center">
        <figure className="font-oswald font-bold text-5xl justify-items-start pt-5">
          {" "}
          Lloyd Cuesta{" "}
          <figcaption className="my-2 text-center text-2xl font-light">
            Full Stack Developer
            <br />
            Cybersecurity Enthusiast
          </figcaption>
        </figure>
        <figure>
          <img
            src={logo}
            className="text-white opacity-100 border-lime-50 rounded-full"
            alt="Panther logo"
          />
        </figure>
        <figure className="font-oswald pt-7 text-4xl">
          About Me
          <figcaption className="font-oswald pt-2 text-2xl opacity-50 font-extralight">
            {" "}
            Im an autodidact MERN FullStack Developer located in La Habana, Cuba
            with a technician degree in IT. I have solid knowledges of
            Javascript, web scraping, networking , process automatization with
            bash script in linux ecosystem.
          </figcaption>
        </figure>
      </div>
      <p className="text-center mt-14 font-oswald">
        My portfolio will be available coming soon, it is in development phase.
        Please be patient
      </p>
    </>
  );
}

export default App;
