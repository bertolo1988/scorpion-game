import "./App.css";

import Topbar from "./Topbar/Topbar";

function Logo() {
  return (
    <img
      className="h-50 sm:h-80 md:h-96 w-auto"
      src="https://raw.githubusercontent.com/bertolo1988/scorpion-game/main/public/new-logo.svg"
      alt="Your Company"
    />
  );
}

function ComingSoon() {
  return (
    <img
      className="px-5 h-auto w-64"
      src="https://raw.githubusercontent.com/bertolo1988/scorpion-game/main/src/images/coming-soon.png"
      alt="Your Company"
    />
  );
}

function App() {
  return (
    <>
      <Topbar />
      <div
        style={{ marginTop: "-3rem" }}
        className="h-screen flex items-center justify-center"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:col-start-2">
            <div className="flex items-center justify-center">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
