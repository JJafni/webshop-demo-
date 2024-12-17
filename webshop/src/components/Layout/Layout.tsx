import { SimpleGrid, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Products } from '../Element'; // Ensure Products is rendering an array or multiple elements.


const Grid = () => {
    const midScreen = useMediaQuery('(min-width: 56.25em)');

    return (
        <Box px={midScreen ? 100 : 25}>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}  // Adjust columns to better fit your layout
                spacing={{ base: 10, sm: 'xl' }}  // Adjust spacing between items
                verticalSpacing={{ base: 'md', sm: 'xl' }}  // Adjust vertical spacing
            >
                <Products />  {/* Products is now rendering multiple items */}
            </SimpleGrid>
        </Box>
    );
}

export { Grid };
