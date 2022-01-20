import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Backend Developer <br />
      </SectionTitle>
      <SectionText>
        Hi My name is Alahira Jeffrey and I am a backend developer. Welcome to my personal portfolio
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1o8dIoP8-juV1v6ovtou3DURUxY--C-KA/view?usp=drivesdk'}>Resume</Button>
      {/* <Button onClick={() => window.location = 'https://github.com/alahirajeffrey'}>Github</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;