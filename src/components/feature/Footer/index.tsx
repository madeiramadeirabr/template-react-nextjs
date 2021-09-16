import Box from "@cavilha/box";

const Footer = ({...props}): JSX.Element => {
    return <Box css={{ ta: "right", height: 100, mt: 10}}>{props.children}</Box>
}

export default Footer;