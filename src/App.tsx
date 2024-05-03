import { FC } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundaryComponent from 'src/hoc/ErrorBoundary';
import Routes from 'src/routing';

// import 'antd/dist/antd.css';
import './styles/index.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundaryComponent>
        <div className="wrapper">
          <Routes />
        </div>
      </ErrorBoundaryComponent>
    </Provider>
  );
};

export default App;
