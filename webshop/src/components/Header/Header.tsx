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
  const [signUpOpened, { open: openSignUp, close: closeSignUp }] = useDisclosure(false); // Sign up modal state
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // State for storing name
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in

  // Check if the user is logged in on initial load
  useEffect(() => {
    const storedUserData = localStorage.getItem('user_data');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setIsLoggedIn(true);
      setName(parsedUserData.name); // Set name from localStorage
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

  // Check login credentials against localStorage
  const login = (email: string, password: string) => {
    const storedUserData = localStorage.getItem('user_data');
    if (!storedUserData) return false;

    const parsedUserData = JSON.parse(storedUserData);
    return parsedUserData.email === email && parsedUserData.password === password;
  };

  // Simulate the sign-up process (save to localStorage)
  const signUp = (name: string, email: string, password: string) => {
    const userData = { name, email, password };
    localStorage.setItem('user_data', JSON.stringify(userData));
  };

  return (
    <Box pb={100}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <DarkLightMode />
          <Group visibleFrom="sm">
            {isLoggedIn ? (
              <Text>{`Hello, ${name}`}</Text> // Display logged-in user's name
            ) : (
              <>
                <Button onClick={open} variant="default">Log in</Button>
                <Button onClick={openSignUp}>Sign up</Button>
              </>
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
              <>
                <Button onClick={open}>Log in</Button>
                <Button onClick={openSignUp}>Sign up</Button>
              </>
            ) : (
              <Button onClick={() => setIsLoggedIn(false)}>Log out</Button>
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

      {/* Sign up Modal */}
      <Modal opened={signUpOpened} onClose={closeSignUp} title="Sign up" centered>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signUp(name, email, password);
            alert('Account created');
            setIsLoggedIn(true); // Update login status after successful sign-up
            closeSignUp(); // Close the sign-up modal
          }}
        >
          <Stack>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <Button type="submit">Sign up</Button>
          </Stack>
        </form>
      </Modal>
    </Box>
  );
}

export { HeaderMegaMenu };
