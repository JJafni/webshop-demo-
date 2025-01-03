import { SimpleGrid, Box, Text, Tabs } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Products } from '../Element'; // Ensure Products is rendering an array or multiple elements.
import { OrderHistory } from '../OrderHistory';

interface LayoutProps {
    isLoggedIn: boolean;
    adminName: string;
}

const Grid = ({ isLoggedIn }: LayoutProps) => {
    // const { isLoggedIn } = useAuth(); // Access `isLoggedIn` from context
    const midScreen = useMediaQuery('(min-width: 56.25em)');

    return (

        <Box px={midScreen ? 100 : 25}>
            <Tabs defaultValue="gallery">

                {isLoggedIn ? (
                    // Render Tabs with panels when logged in
                    <>
                        <Tabs.List>
                            <Tabs.Tab value="tab1">Orders</Tabs.Tab>
                            <Tabs.Tab value="tab2">Products</Tabs.Tab>
                            <Tabs.Tab value="tab3">Shop</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="tab1">
                        <OrderHistory />
                        </Tabs.Panel>
                        <Tabs.Panel value="tab2">
                            <Text>This is the content of Tab 2.</Text>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab3"> <SimpleGrid
                            cols={{ base: 1, sm: 2, lg: 4 }}  // Adjust columns to better fit your layout
                            spacing={{ base: 10, sm: 'xl' }}  // Adjust spacing between items
                            verticalSpacing={{ base: 'md', sm: 'xl' }}  // Adjust vertical spacing
                        >
                            <Products />
                        </SimpleGrid></Tabs.Panel>
                    </>

                ) : (
                    // Render SimpleGrid when not logged in
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}  // Adjust columns to better fit your layout
                        spacing={{ base: 10, sm: 'xl' }}  // Adjust spacing between items
                        verticalSpacing={{ base: 'md', sm: 'xl' }}  // Adjust vertical spacing
                    >
                        <Products />
                    </SimpleGrid>
                )}
            </Tabs>
        </Box>


    );
}

export { Grid };
