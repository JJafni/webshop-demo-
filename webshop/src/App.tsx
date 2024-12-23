import '@mantine/core/styles.css';
import { MantineProvider, Box } from '@mantine/core';
import { HeaderMegaMenu, Grid } from './components';
import './App.css'

const App = () => {

  return (

    <MantineProvider>
        <HeaderMegaMenu />
    </MantineProvider>

  )
}

export { App }
