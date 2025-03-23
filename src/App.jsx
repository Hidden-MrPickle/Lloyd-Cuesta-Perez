import LoadingPage from "./loadingPage.jsx";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Button from "./button.jsx";

function App() {
  gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);
  const [count, setCount] = useState();
  const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#hero-loading", { duration: 1, y: 500 })
      .to("#welcomeLoading", {
        duration: 4,
        text: { value: "Stand By ...", speed: 0 },
        ease: "none",
      })
      .to("#logo", { rotate: "1080", duration: 1 });
  });
  //const [count, setCount] = useState(0);

  return <LoadingPage />;
}
export default App;
