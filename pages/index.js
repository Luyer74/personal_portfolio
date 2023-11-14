import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  List,
  ListItem,
  Icon,
  Link,
} from "@chakra-ui/react";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layout/article";

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Section delay={0.1}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading
                as="h1"
                variant="page-title"
                mb={2}
                textAlign={{ base: "center", md: "left" }}
              >
                Hi, I'm{" "}
                <Text display="inline" color="#D66F3E">
                  Luyer
                </Text>
              </Heading>
              <Text fontSize="20px" textAlign={{ base: "center", md: "left" }}>
                Software Engineer, Data Enthusiast
              </Text>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 3, md: "0px" }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="#D66F3E"
                borderWidth={3}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/pp.jpeg"
              />
            </Box>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box align="center" my={4}>
            <NextLink href="/about" scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="orange"
                letterSpacing="tighter"
              >
                Get to know me
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box
            background={useColorModeValue("beige", "whiteAlpha.300")}
            p={5}
            mt={8}
            borderRadius={20}
            boxShadow="lg"
          >
            <Heading as="h3" size={"md"} mb={1}>
              Contact
            </Heading>
            <Divider
              mb={3}
              borderColor={useColorModeValue("black", "gray")}
              width="50%"
            />
            <List>
              <ListItem>
                <Link
                  href="https://github.com/Luyer74"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    leftIcon={<Icon as={SiGithub} />}
                  >
                    Luyer74
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="mailto:luisyerik@yahoo.com"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    leftIcon={<Icon as={EmailIcon} />}
                  >
                    luisyerik@yahoo.com
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/luisyerik/"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    leftIcon={<Icon as={SiLinkedin} />}
                  >
                    /luisyerik
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.instagram.com/luisyerik16/"
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    leftIcon={<Icon as={SiInstagram} />}
                  >
                    @luisyerik16
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
