import { styled } from '@cavilha/theme';

const HeroContainer = styled('div', {
  display: 'block',
  height: 100,
  width: '100%',
  backgroundColor: 'lime',
});

const HeroTitle = styled('h1', {
  display: 'block',
});

const HeroSubtitle = styled('h2', {
  display: 'block',
});

const HeroSlot = styled('div', {
  display: 'block',
  width: '100%',
});


type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const Hero = ({ title, imageUrl, subtitle, children }: HeroProps): JSX.Element => {
  return (
    <HeroContainer css={{ backgroundImage: `url(${imageUrl})` }}>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      {children && <HeroSlot> {children}</HeroSlot>}
    </HeroContainer>
  );
};

export default Hero;
