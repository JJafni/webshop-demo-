import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import { HeaderMegaMenu} from './components';
import './App.css'

const App = () => {

  return (

    <MantineProvider>
        <HeaderMegaMenu />
    </MantineProvider>

  )
}

export { App }
