import '@mantine/core/styles.css';
import { MantineProvider, Box } from '@mantine/core';
import { HeaderMegaMenu, Grid } from './components';
import './App.css'

const App = () => {

  return (

    <MantineProvider>
      <Box style={{ position: 'sticky', top: '0', zIndex: '100' }}>
        <HeaderMegaMenu />
      </Box>
    </MantineProvider>

  )
}

export { App }
