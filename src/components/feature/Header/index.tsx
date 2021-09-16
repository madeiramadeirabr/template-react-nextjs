import { styled } from "@cavilha/theme";

const HeaderContainer = styled('div', {
    display: 'block',
    width: '100%',
    background: '$neutral3'
  });


const Header = ({...props}): JSX.Element => {
    return <HeaderContainer>{props.children}</HeaderContainer>
}

export default Header;