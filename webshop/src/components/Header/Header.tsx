
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DarkLightMode } from '../Element';
import classes from './HeaderMegaMenu.module.css';


const HeaderMegaMenu = () => {

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={100}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <DarkLightMode />
          <Group h="100%" gap={0} visibleFrom="sm">

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>


              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>


                <Divider my="sm" />


                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>


          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>

          </Group>
          <Group px="md">
            <DarkLightMode />
          </Group>

        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export { HeaderMegaMenu }