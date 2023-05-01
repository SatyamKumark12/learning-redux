import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../../reudxContainer/Store';
import BookContainer from '../../reudxContainer/BookContainer';

export default function App({ Component, pageProps }: AppProps) {
  return<>
  <Provider store={store}>
  <BookContainer/>
  <Component {...pageProps} />
  </Provider>
  </>
  
  
}
