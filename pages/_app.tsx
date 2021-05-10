import '../styles/globals.css'
import store from '../store/store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
