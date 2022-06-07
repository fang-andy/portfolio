import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon, DownloadIcon } from '@chakra-ui/icons';

export const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}>
    </IconButton>
  )
}

export const ResumeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton aria-label="Download Resume"
      colorScheme={useColorModeValue('orange', 'purple')}
      icon={<DownloadIcon />}>
    </IconButton>
  )
}

// export default ThemeToggleButton; ResumeButton