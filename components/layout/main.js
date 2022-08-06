import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container } from "@chakra-ui/react";
import Benito from "../benito";
import NoSsr from "../no-ssr.js";
import Footer from "../footer.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Luyer - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Benito></Benito>
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
