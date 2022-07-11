import React from 'react';
import { Button, ChakraProvider} from '@chakra-ui/react';
import { theme } from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Button colorScheme="teal">ボタン</Button>
      <h1>aaaas</h1>
    </ChakraProvider>
  );
}

export default App;
