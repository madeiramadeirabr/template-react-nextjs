import Box from "@cavilha/box";

const Header = ({...props}): JSX.Element => {
    return <Box css={{ mt: 25, mb: 50 }}>{props.children}</Box>
}

export default Header;