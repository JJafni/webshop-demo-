import { SimpleGrid, Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Products } from '../Element'; // Ensure Products is rendering an array or multiple elements.
// import { useAuth } from '../../context';

interface LayoutProps {
    isLoggedIn: boolean;
    adminName: string;
}

const Grid = ({ isLoggedIn, adminName }: LayoutProps) => {
    // const { isLoggedIn } = useAuth(); // Access `isLoggedIn` from context
    const midScreen = useMediaQuery('(min-width: 56.25em)');

    return (
        <Box px={midScreen ? 100 : 25}>
            {isLoggedIn && <Text>Hello, {adminName}!</Text>}

            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}  // Adjust columns to better fit your layout
                spacing={{ base: 10, sm: 'xl' }}  // Adjust spacing between items
                verticalSpacing={{ base: 'md', sm: 'xl' }}  // Adjust vertical spacing
            >
                <Products />
            </SimpleGrid>
        </Box>
    );
}

export { Grid };
