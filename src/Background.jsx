import { useEffect, useState } from "react";
export default function Background() {
  const [hue, setHue] = useState(0);
  const [randomTime, setRandomTime] = useState(getRandom());

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((hue) => hue + 10);

      setRandomTime((randomTime) => getNewHue());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getNewHue() {
    return getRandom();
  }
  function getRandom() {
    return Math.random() * 12000;
  }

  return (
    <div>
      <div
        className="background"
        style={{ filter: "hue-rotate(" + hue + "deg)" }}
      ></div>
      <div className="main">
        <div className="content">
          <h1>MARTEKA FAIR</h1>

          <img
            id="image"
            src="marteka-profile.png"
            className="nav--logo"
            alt=""
          />

          <h2 className="copy">
            Welcome to Marteka Fair's website. Marteka Fair is a dj, producer,
            record collector. Below you can browse through her discography and
            download her published works.
          </h2>
          <div className="navbar">Home | Publications | Comments | Contact</div>
        </div>
      </div>
    </div>
  );
}
