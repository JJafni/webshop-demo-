import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu, Grid } from './components';
import './App.css'

const App = () => {

  return (

    <MantineProvider>
      <HeaderMegaMenu />
      <Grid />
    </MantineProvider>

  )
}

export { App }
