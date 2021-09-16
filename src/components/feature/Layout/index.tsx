import Header from '@components/feature/Header';
import Footer from '@components/feature/Footer';

const Layout = ({...props}) => {
  return (
    <div>
      <Header>header</Header>
      <div>{props.children}</div>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
