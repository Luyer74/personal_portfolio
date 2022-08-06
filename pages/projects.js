import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Deskup from "../public/projects/desk-up.png";
import Botdesaparecidx from "../public/projects/botdesaparecidx.png";
import Stags from "../public/projects/stags.png";
import Pato from "../public/projects/threejs duck.png";
import Web from "../public/projects/web development course.png";
import Kochrennen from "../public/projects/kochrennen2.png";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layout/article";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Box>
          <Section>
            <Heading mb={3}>Projects</Heading>
            <Divider mb={3} borderColor={useColorModeValue("black", "gray")} />
            <Text fontSize={20} mb={3}>
              Here is a list of my most relevant projects I've worked on during
              college or personal time.
            </Text>
          </Section>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="botdesaparecidx"
                title="BotDesaparecidx"
                thumbnail={Botdesaparecidx}
              >
                Social media bot for spreading missing person cases in México
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="deskup" title="Desk-Up" thumbnail={Deskup}>
                Web application for creating desk setups
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="stags" title="Stags" thumbnail={Stags}>
                Web application to create playlists based on tags.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="duck" title="ThreeJS Duck" thumbnail={Pato}>
                3D scene of a duck built with Three.js
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="course"
                title="Web Development Course"
                thumbnail={Web}
              >
                Built a complete online course for Web Development with HTML,
                CSS and JavaScript.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="kochrennen"
                title="Kochrennen"
                thumbnail={Kochrennen}
              >
                Videogame inspired on the cooking game Overcooked.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Projects;
