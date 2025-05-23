import LoadingPage from "./loadingPage.jsx";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./button.jsx";
import Page from "./page.jsx";

function App() {
  gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#hero-loading", { duration: 3, y: 900, ease: "bounce" })
      .to("#welcomeLoading", {
        duration: 4,
        text: { value: "Go ahead...", speed: 0 },
        ease: "none",
      })
      .to("#logo", { rotate: "1080", duration: 1 })
      .to("#hero-loading", { y: -1000 })
      .to("#page", { opacity: 1 });
  });
  //const [count, setCount] = useState(0);

  return (
    <div>
      <LoadingPage />
      <Page />
    </div>
  );
}
export default App;
