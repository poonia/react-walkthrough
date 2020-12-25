import './App.css';
import CakeContainer from './components/cakeContainer';

// Provider will provide redux store to "React Components"
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
