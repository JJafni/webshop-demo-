import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Product, products } from './../../../data/products'; // Adjust the path if needed

const Products = () => {
    return (
        <>
            {products.map((product) => (
                <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={product.image}
                            height={300}
                            alt={product.name}
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{product.name}</Text>
                    </Group>

                    <Text size="sm" c="dimmed">
                        Price: ${product.price.toFixed(2)}
                    </Text>

                    <Button color="blue" fullWidth mt="md" radius="md">
                        Add to Cart
                    </Button>
                </Card>
            ))}
        </>
    );
};

export { Products };
