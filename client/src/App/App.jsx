import { ChakraProvider } from '@chakra-ui/react'
import  {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import { 
  Home, 
  Auth, 
  Calculator,
  EventsCalendar,
  GoodsCalendar,
  Ecolife,
  Ecorecycle,
  Ecotech,
} from '../pages'
import { Navbar } from '../components'

import './App.css'
import { reducers } from '../reducers'

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

function App() {

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/eventscalendar' element={<EventsCalendar />} />
            <Route path='/goodscalendar' element={<GoodsCalendar />} />
            <Route path='/ecolifestyle' element={<Ecolife />} />
            <Route path='/ecotech' element={<Ecotech />} />
            <Route path='/ecorecycle' element={<Ecorecycle />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  )
}

export default App
