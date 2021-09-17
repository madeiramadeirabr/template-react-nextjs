import Box from '@cavilha/box';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps): JSX.Element => (
  <Box css={{ mt: 25, mb: 50 }}>{children}</Box>
);

export default Header;
