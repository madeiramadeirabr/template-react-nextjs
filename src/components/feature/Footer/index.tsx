import { styled } from "@cavilha/theme";

const SFooter = styled('div', {
    display: "block",
    height: 100,
    backgroundColor: "red"
});

const Footer = ({...props}): JSX.Element => {
    return <SFooter>{props.children}</SFooter>
}

export default Footer;