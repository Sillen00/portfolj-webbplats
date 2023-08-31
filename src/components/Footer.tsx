import { ActionIcon, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { BrandFacebook, BrandInstagram, BrandYoutube } from 'tabler-icons-react';

function Footer() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const matches = useMediaQuery('(min-width: 48em)');
  // TSX ------------------------------------------------------------------------
  return (
    <footer
      style={{
        backgroundColor: 'black',
        padding: matches ? '1rem 1rem 0rem 1rem' : '1rem 0rem',
      }}
    >
      <Group
        sx={{
          display: 'flex',
          flexDirection: matches ? 'row-reverse' : 'column',
          gap: matches ? '0rem' : '0.8rem',
          alignItems: matches ? 'flex-end' : 'center',
          justifyContent: matches ? 'space-between' : 'center',
        }}
      >
        <img style={{ height: '4rem' }} src='/public/logo-lil-flame.png' alt="ELD'S IT logotype" />
        <Group
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: matches ? 'flex-start' : 'center',
          }}
        >
          <Group
            sx={{
              display: 'flex',
              gap: matches ? '0.5rem' : '1rem',
              flexDirection: 'column',
              alignItems: matches ? 'flex-start' : 'center',
            }}
          >
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text size='12px' fw={700}>
                VÅRT TEAM
              </Text>
            </NavLink>
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text size='12px' fw={700}>
                KONTAKTA OSS
              </Text>
            </NavLink>
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text size='12px' fw={700}>
                OM OSS
              </Text>
            </NavLink>
          </Group>
          <Group pb={matches ? '0rem' : '1rem'}>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandInstagram size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandFacebook size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandYoutube size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
      <Text
        fw={700}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          transform: matches ? 'translateY(-1rem)' : 'translateY(0rem)',
        }}
      >
        ©ELD'S IT 2023
      </Text>
    </footer>
  );
}

export default Footer;
