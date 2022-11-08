import './App.css';
import MainClassic from './before/MainClassic';
import MainPromiseAll from './promiseAll/MainPromiseAll';
import MainSuspense from './suspense/MainSuspense';

function App() {
  return (
    <div className="App">
      <MainClassic />
      <MainPromiseAll />
      <MainSuspense />
    </div>
  );
}

export default App;
