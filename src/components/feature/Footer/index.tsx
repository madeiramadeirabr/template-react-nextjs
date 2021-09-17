import Box from "@cavilha/box";

type FooterProps = {
    children?: React.ReactNode;
}

const Footer = ({children}: FooterProps): JSX.Element => <Box css={{ ta: "right", height: 100, mt: 10}}>{children}</Box>

export default Footer;