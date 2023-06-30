import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App/>, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}

