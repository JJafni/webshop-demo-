import { SimpleGrid } from '@mantine/core';
import { Products } from '../Element';

const Grid = () => {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 5 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
           <Products/>
           <Products/>
           <Products/>
        </SimpleGrid>
    )
}

export { Grid }