import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Modal,
  TextInput,
  PasswordInput,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DarkLightMode } from '../Element';
import classes from './HeaderMegaMenu.module.css';
import { useState, useEffect } from 'react';

const HeaderMegaMenu = () => {
  const [opened, { open, close }] = useDisclosure(false); // Login modal state
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setName] = useState(''); // State for storing name
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in

  // Admin account credentials (hardcoded)
  const adminName = "admin";
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  // Check if the user is logged in on initial load
  useEffect(() => {
    const storedUserData = localStorage.getItem('user_data');
    if (storedUserData) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle form submission for login
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setLoginError(''); // Reset error message

    setTimeout(() => {
      const isLoggedIn = login(email, password);
      if (isLoggedIn) {
        close(); // Close the login modal on successful login
        alert(`Logged in with email: ${email}`);
        setIsLoggedIn(true); // Update the logged-in state
      } else {
        setLoginError('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  // Check login credentials against admin credentials or localStorage
  const login = (email: string, password: string) => {
    if (email === adminEmail && password === adminPassword) {
      return true; // Admin login successful
    }

    const storedUserData = localStorage.getItem('user_data');
    if (!storedUserData) return false;

    const parsedUserData = JSON.parse(storedUserData);
    return parsedUserData.email === email && parsedUserData.password === password;
  };

  // Log out functionality
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user_data'); // Clear user data from localStorage
  };

  return (
    <Box pb={100}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <DarkLightMode />
          <Group visibleFrom="sm">
            {isLoggedIn ? (
              <>
                <Text>{`Hello, ${adminName}`}</Text> 
                <Button onClick={handleLogout} variant="default">Log out</Button> {/* Log out button in header */}
              </>
            ) : (
              <Button onClick={open} variant="default">Log in</Button>
            )}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            {!isLoggedIn ? (
              <Button onClick={open}>Log in</Button>
            ) : (
              <Button onClick={handleLogout}>Log out</Button>
            )}
          </Group>
          <Group px="md">
            <DarkLightMode />
          </Group>
        </ScrollArea>
      </Drawer>

      {/* Login Modal */}
      <Modal opened={opened} onClose={close} title="Log in" centered>
        <form onSubmit={handleLoginSubmit}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
            <Button type="submit" loading={loading} disabled={loading}>
              Log in
            </Button>
          </Stack>
        </form>
      </Modal>
    </Box>
  );
}

export { HeaderMegaMenu };
