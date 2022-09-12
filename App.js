import MainStack from './src/Navigation/MainStack';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';

export default function App() {

   return (
     <Provider store={store}>
        <MainStack/>   
     </Provider>
  );
}
