import List from "./list.jsx";
import "./App.css";
import Photo from "./photo.jsx";
import { instagram, whatsapp, github } from "../peIn.js";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto flex-1 h-[100%] z-[6] absolute top-0 left-0 max-w-screen-xl w-full bg-[url('/Lloyd-Cuesta-Perez/images/bg-sky.jpg')] bg-scale bg-no-repeat bg-cover overflow-x-hidden">
        <div className=" ml-[75%] opacity-30 z-[7] bg-white fixed  w-[0.1rem] h-full"></div>
        <div className=" ml-[85.2%] opacity-30 z-[7] bg-white fixed  w-[0.1rem] h-full"></div>
        <ul className=" pt-6 flex flex-row-reverse h-24">
          <List
            social={github}
            name={"Github"}
            logo={"github"}
            key={"List-1"}
            alt={"Github logo"}
          ></List>
          <List
            social={instagram}
            name={"instagram"}
            logo={"instagram"}
            key={"List-2"}
            alt={"Instagram logo"}
          ></List>
          <List
            social={whatsapp}
            name={"Whatsapp"}
            logo={"whatsapp"}
            key={"List-3"}
            alt={"whatsapp logo"}
          ></List>
        </ul>
        <div className="absolute left-[5rem] top-[-30rem]  size-[70rem] scale-x-[1] z-[3] rotate-[-8deg] overflow-y-hidden">
          <Photo
            alt="realistic airplane landing"
            photo="airplane-landing.png"
          ></Photo>
        </div>
        <div className="z-[5] left-[10rem] grayscale-[100%] top-[6rem] w-[22rem] absolute ">
          <div className=" rounded-md bg-slate-200 absolute top-1/4 left-[-9rem] w-20 h-60"></div>
          <Photo
            alt="Asap Rocky raper smiling"
            photo="Asap_front.png"
            w="370px"
          ></Photo>
          <h1 className=" text-[4.5rem] w-60 left-10 absolute font-bold text-slate-200 ">
            Peyton Roberto Bartell
          </h1>
        </div>

        <div className="z-[4]  left-[30rem] grayscale-[100%] top-[20rem] absolute w-[22rem]  ">
          <Photo
            alt="Legs of Asap Rocky rapper"
            photo="Asap_back.png"
            w="370px"
          ></Photo>
          <div className="rounded-md bg-slate-200 absolute top-[30%] right-[-10rem] w-20 h-60"></div>
        </div>
        {
          // vertical lines
        }
      </div>
    </>
  );
}

export default App;
