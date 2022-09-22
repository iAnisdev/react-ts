import ContextMain from "./components/Hooks/Context/Main";

import LanguageContextProvider from "./components/Contexts/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <ContextMain />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
