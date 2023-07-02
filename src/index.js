import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <div>
      <input className="prfI hidden" id="offPrf" type="checkbox" />
      <input className="navI hidden" id="offNav" type="checkbox" />
      <div className="mainWrp">
        <App />
      </div>
    </div>
  </BrowserRouter>
);
