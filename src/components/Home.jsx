import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box >
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'} overflow={'hidden'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-160deg)'} />

          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae
            magnam fuga odit aliquid! Facilis unde dolorem vitae neque excepturi
            laudantium ad soluta dicta! Ducimus nemo quibusdam consequuntur
            nobis architecto libero officiis, quae tempora nostrum odio ad
            dolore sit omnis, sapiente necessitatibus, expedita sed quasi esse
            deserunt ab illum. Sed! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam quo aliquid voluptate, iusto reiciendis
            maxime mollitia ut magni. Quae odio alias voluptatum pariatur neque
            nihil temporibus exercitationem ab, sunt id?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'100vh'}/>
      <Heading bgColor={'blackAlpha.400'} color={'white'} borderRadius={'5px'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2}  h={'100vh'} />
      <Heading bgColor={'whiteAlpha.200'} color={'black'} borderRadius={'5px'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h="100vh">
      <Image src={img3}  h={'100vh'} />
      <Heading bgColor={'whiteAlpha.200'} color={'black'} borderRadius={'5px'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4}  h={'100vh'}/>
      <Heading bgColor={'whiteAlpha.200'} color={'black'} borderRadius={'5px'}  {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
