import "./App.css";

import Topbar from "./Topbar/Topbar";

function Logo() {
  return (
    <img
      className="h-80 w-auto"
      src="https://raw.githubusercontent.com/bertolo1988/scorpion-game/main/public/new-logo.svg"
      alt="Your Company"
    />
  );
}

function ComingSoon() {
  return (
    <img
      className="h-8 w-auto"
      src="https://raw.githubusercontent.com/bertolo1988/scorpion-game/main/src/images/coming-soon.svg"
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
        class="h-screen flex items-center justify-center"
      >
        <div class="grid grid-cols-1">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <div className="flex items-center justify-center">
            <ComingSoon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
