import { Center, Spinner } from '@chakra-ui/react';

function Loader() {
  return (
    <Center minH="100vh">
      <Spinner thickness="4px" speed="0.65s" color="teal.500" size="xl" />
    </Center>
  );
}

export default Loader;
