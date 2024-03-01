import { animated, useSpring } from "@react-spring/web";
import { OnCopy } from "../services/CopyService";
import { useState } from "react";
import ScrollImage from "./ScrollImage";
import logo from "../assets/logo.svg";
import copy from "../assets/copy.svg";
import check from "../assets/check.svg";
import "../styles/HomeSection.scss";

export default function HomeSection() {
  const bashText = "docker run -d -p 25565:25565 b4shtirk1n/dockercraft";

  const [showCopy, toggleShowCopy] = useState(false);

  const opacity = useSpring({
    opacity: showCopy ? 1 : 0,
    config: { duration: 120 },
  });

  async function onCopyClick(e) {
    e.preventDefault();
    toggleShowCopy(true);
    OnCopy(bashText);
    setTimeout(() => {
      toggleShowCopy(false);
    }, 1000);
  }

  return (
    <section className="home">
      <div className="home-container">
        <h1>Dockercraft</h1>
        <p>Docker image for minecraft</p>
        <pre>
          <code className="bash">{bashText}</code>
          <a className="copy-btn" onClick={onCopyClick}>
            <animated.img
              className="copy"
              style={{ ...opacity }}
              src={check}
            ></animated.img>
            <img className="copy-btn-img" src={copy}></img>
            <span className="tooltip">Copy</span>
          </a>
        </pre>
      </div>
      <ScrollImage className="logo" src={logo} />
    </section>
  );
}
