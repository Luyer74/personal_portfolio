import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" pt={3}>
      &copy; {new Date().getFullYear()} Luis Arámbula. All Rights Reserved.
    </Box>
  );
};

export default Footer;
