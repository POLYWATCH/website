import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Apps from '@mui/icons-material/Apps';
import FactCheck from '@mui/icons-material/FactCheck';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import { Link } from '@mui/material';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';


  


type Options = {
  initialActiveIndex: null | number;
  vertical: boolean;
  handlers?: {
    onKeyDown: (
      event: React.KeyboardEvent<HTMLAnchorElement>,
      fns: { setActiveIndex: React.Dispatch<React.SetStateAction<number | null>> },
    ) => void;
  };
};


const useRovingIndex = (options?: Options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    initialActiveIndex!,
  );
  const targetRefs = React.useRef<Array<HTMLAnchorElement>>([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex! + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex! - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index: number) => ({
    ref: (ref: HTMLAnchorElement) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

type AboutMenuProps = {
  href: string; // Aggiungi href come una proprietà
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AboutMenu = React.forwardRef(function AboutMenu(
  { href, focusNext, focusPrevious, ...props }: AboutMenuProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  // Contenuto della funzione...



    const open = Boolean(anchorEl);
    const id = open ? 'about-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            href={href} // Utilizza l'href fornito
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
              color: 'white', // Imposta il colore del testo su bianco
            })}
          >
            About <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
                '--ListItemDecorator-size': '32px',
              }}
            >
           <Link href="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>
  <ListItem role="none">
    <ListItemButton {...getTargetProps(0)} sx={{ color: 'white' }}>
      <ListItemDecorator>
        <Apps />
      </ListItemDecorator>
      Overview
    </ListItemButton>
  </ListItem>
</Link>


<Link href="/rewards" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}sx={{ color: 'white' }}>
                  <ListItemDecorator>
                   
                  </ListItemDecorator>
                  Rewards
                </ListItemButton>
              </ListItem>
              </Link>





              
              <Link href="/buy" style={{ textDecoration: 'none', color: 'inherit' }}>

              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(2)}sx={{ color: 'white' }}>
                  <ListItemDecorator>
                    <FactCheck />
                  </ListItemDecorator>
                  Marketplace
                </ListItemButton>
              </ListItem>
              </Link>

            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

type AdmissionsMenuProps = {
  href: string; // Aggiungi href come una proprietà
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AdmissionsMenu = React.forwardRef(function AdmissionsMenu(
  { href, focusNext, focusPrevious, ...props }: AdmissionsMenuProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
    const address = useAddress() ?? ''; // Se address è undefined, viene utilizzato un valore predefinito vuoto

    const open = Boolean(anchorEl);
    const id = open ? 'admissions-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            href={href} // Utilizza l'href fornito
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
              color: 'white', // Imposta il colore del testo su bianco
            })}
          >
            User <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="Admissions"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                minWidth: 180,
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
              }}
            >

<ListItem role="none" sx={{ fontSize: 'small' }}>
  <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
</ListItem>

<ListDivider />


<Link href={`/profile/${address}`} style={{ textDecoration: 'none', color: 'inherit' }}>

              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)} sx={{ color: 'white' }}>
                Profile<ListItemDecorator>
                    <Person />
                  </ListItemDecorator>
                  
                </ListItemButton>
              </ListItem>
              </Link>
              <ListDivider />



             
    




              <Link href="/$TIME" style={{ textDecoration: 'none', color: 'inherit' }}>

              <ListItem role="none">
              <ListItemButton role="menuitem" {...getTargetProps(1)} sx={{ color: 'white' }}>
  Buy Time
</ListItemButton>

              </ListItem>
              </Link>



              <Link href="/evolve/evolve" style={{ textDecoration: 'none', color: 'inherit' }}>

              <ListItem
                role="none"
                endAction={
                  <IconButton variant="outlined" color="neutral" size="sm">
                    
                  </IconButton>
                }
              >
                <ListItemButton role="menuitem" {...getTargetProps(2)}sx={{ color: 'white' }}>
                  Evolve
                </ListItemButton>
              </ListItem>
              </Link>
              </List>
            </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

export default function ExampleNavigationMenu() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box
      sx={{
        position: 'fixed', // Rende la navbar fissa
        top: 0, // Posiziona la navbar in alto
        width: '100%', // Assicura che la navbar si estenda su tutta la larghezza
        backgroundColor: 'transparent', // Imposta il background trasparente
        zIndex: 1000, // Assicura che la navbar sia sopra agli altri elementi sulla pagina
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px',
          '--ListItem-gap': '0px',
          display: 'flex', // Aggiunto per centrare il contenuto
          justifyContent: 'center', // Aggiunto per centrare il contenuto
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            {...getTargetProps(0)}
            component="a"
            href="/https://polywatch.xyz/" // Modifica l'href per il link Home
            sx={{ color: 'white' }} // Imposta il colore del testo su bianco
          >
            <ListItemDecorator>
              <HomeRounded />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <AboutMenu
            href="/about-us" // Modifica l'href per il link About Us
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
           
            focusPrevious={focusPrevious}
            {...getTargetProps(1)} // Passa le props del target index 1
             // Imposta l'href per il link About Us
          />
        </ListItem>
        <ListItem role="none">
          <AdmissionsMenu
            href="/profile" // Modifica l'href per il link Administration
            onMouseEnter={() => {
              setActiveIndex(2);
              targets[2].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(2)} // Passa le props del target index 2
          />
        </ListItem>
      </List>
    </Box>
  );
}
