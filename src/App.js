import "../src/assets/css/index.css";
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import { useEffect } from "react";
import Layout from "./components/core/Layout";

function App() {
  const { isDarkTheme } = useTheme();
  

  useEffect(()=>{
    document.body.style.background = isDarkTheme? "#212529" : "#ecedef";
    document.body.style.color = isDarkTheme? "#ddf3e7": "#2a6041";
  },[isDarkTheme])

  return (
    <div className={classNames({ dark: isDarkTheme })}>
      <Layout/>
    </div>
  );
}

export default App;
