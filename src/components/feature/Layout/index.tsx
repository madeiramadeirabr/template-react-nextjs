import Header from '@components/feature/Header';
import Footer from '@components/feature/Footer';
import Flex from '@cavilha/flex';
import Text from '@cavilha/text';
import { Container, Row, Col } from '@cavilha/layout';

type LayoutProps = {
  children?: React.ReactNode
};


const Layout = ({ children }: LayoutProps): JSX.Element => (
    <Flex alignItems="center" css={{ height: 'inherit', width: 'inherit' }}>
      <Container>
        <Row>
          <Col>
            <Header>hello world.</Header>

            {children}
 
            <Footer><Text as="span" textStyle="bodySmallSemibold">feito com ❤️ pelo time MadeiraMadeira.</Text></Footer>
          </Col>
        </Row>
      </Container>
    </Flex>
  );

export default Layout;
