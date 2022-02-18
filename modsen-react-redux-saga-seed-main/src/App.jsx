import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyle from './theme/GlobalStyle'
import Router from './Router'
import store, { persistor } from './store'
import theme from './theme/config'
import Loader from './components/common/Loader'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loader />}
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
