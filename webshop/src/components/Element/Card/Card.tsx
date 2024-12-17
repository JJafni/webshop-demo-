import { useState } from 'react';
import { Card, Image, Text, Button, Group, Drawer, Badge, ActionIcon } from '@mantine/core';
import { IconX, IconPlus, IconMinus } from '@tabler/icons-react'; // Import icons for "+" and "-"
import { products } from './../../../data/products'; // Adjust the path if needed

// Add interface for Product type with quantity
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number; // New field to track quantity
}

const Products = () => {
    const [cart, setCart] = useState<Product[]>([]); // Cart with quantity tracking
    const [drawerOpened, setDrawerOpened] = useState(false);

    const addToCart = (product: Omit<Product, 'quantity'>) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Increase quantity if the product already exists
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Add new product with quantity = 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        );
    };

    const updateQuantity = (productId: number, increment: boolean) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove products with quantity <= 0
        );
    };

    return (
        <>
            {/* Drawer to show Cart Items */}
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                title="Your Cart"
                padding="xl"
                size="md"
            >
                {cart.length === 0 ? (
                    <Text c="dimmed">Your cart is empty.</Text>
                ) : (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '10px',
                                borderBottom: '1px solid #eee',
                                paddingBottom: '10px',
                            }}
                        >
                            <div>
                                <Text fw={500}>{item.name}</Text>
                                <Text c="dimmed" size="sm">
                                    ${item.price.toFixed(2)} x {item.quantity}
                                </Text>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <ActionIcon
                                    color="blue"
                                    onClick={() => updateQuantity(item.id, false)}
                                    title="Decrease quantity"
                                >
                                    <IconMinus size={18} />
                                </ActionIcon>
                                <Text>{item.quantity}</Text>
                                <ActionIcon
                                    color="blue"
                                    onClick={() => updateQuantity(item.id, true)}
                                    title="Increase quantity"
                                >
                                    <IconPlus size={18} />
                                </ActionIcon>
                                <ActionIcon
                                    color="red"
                                    onClick={() => removeFromCart(item.id)}
                                    title="Remove item"
                                >
                                    <IconX size={18} />
                                </ActionIcon>
                            </div>
                        </div>
                    ))
                )}

                {/* Total Price */}
                {cart.length > 0 && (
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <Text fw={700} size="lg">
                            Total: $
                            {cart
                                .reduce(
                                    (sum, item) => sum + item.price * item.quantity,
                                    0
                                )
                                .toFixed(2)}
                        </Text>
                        <Button color="blue" mt="md" fullWidth>
                            Proceed to Checkout
                        </Button>
                    </div>
                )}
            </Drawer>

            {/* Product Cards */}
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

                    <Button
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                </Card>
            ))}

            {/* Floating Cart Button */}
            <Button
                color="blue"
                style={{ position: 'fixed', bottom: 20, right: 20 }}
                radius="xl"
                onClick={() => setDrawerOpened(true)}
            >
                View Cart <Badge color="red" size="sm" ml="xs">{cart.length}</Badge>
            </Button>
        </>
    );
};

export { Products };
