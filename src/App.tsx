import './App.css';
import { Application } from './components/application/application';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
