import { useEffect, useState } from 'react';
import { Card, Text, Group, Button, Badge } from '@mantine/core';

interface Order {
  cart: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: string;
  date: string;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Retrieve orders from localStorage on component mount
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  // Clear order history
  const clearHistory = () => {
    localStorage.removeItem('orders');
    setOrders([]);
    alert('Order history cleared!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Text fw={700} size="xl" mb="md">
        Order History
      </Text>

      {orders.length === 0 ? (
        <Text c="dimmed">No orders found.</Text>
      ) : (
        orders.map((order, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder mb="md">
            <Group justify="space-between" mb="xs">
              <Text fw={500}>Order #{index + 1}</Text>
              <Badge color="blue">{new Date(order.date).toLocaleDateString()}</Badge>
            </Group>

            <div style={{ marginBottom: '10px' }}>
              {order.cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '5px',
                  }}
                >
                  <Text>
                    {item.name} x {item.quantity}
                  </Text>
                  <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                </div>
              ))}
            </div>

            <Text fw={700} align="right">
              Total: ${order.total}
            </Text>
          </Card>
        ))
      )}

      {orders.length > 0 && (
        <Button color="red" fullWidth mt="md" onClick={clearHistory}>
          Clear Order History
        </Button>
      )}
    </div>
  );
};

export { OrderHistory };
