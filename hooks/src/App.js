import './App.css';
import ClassCounter from './components/class-counter';
import HookCounterComponent from './components/hook-counter';
import HookCounterPrevComponent from './components/hook-counter-prev';
import HookObjectComponent from './components/hook-object';
import CustomHookCounter from './components/customHookCounter';
import DataFatchingHook from './components/dataFetchHook';
function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounterComponent />
      <HookCounterPrevComponent />
      <HookObjectComponent />
      <CustomHookCounter /> */}
      <DataFatchingHook />
    </div>
  );
}

export default App;
