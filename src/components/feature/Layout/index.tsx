import Header from '@components/feature/Header';
import Footer from '@components/feature/Footer';

const Layout = ({...props}) => {
  return (
    <div>
      <Header>header</Header>
      <>{props.children}</>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
