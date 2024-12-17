import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './components';
import './App.css'

function App() {

  return (

    <MantineProvider>
      <HeaderMegaMenu />
    </MantineProvider>

  )
}

export default App
