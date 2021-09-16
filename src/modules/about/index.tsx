import Layout from '@components/feature/Layout';
import Hero from '@components/feature/Heading';

/**
 * About Module
 *
 * Funcionalidades para pagina About
 *
 * @param template: string que defina novas variacoes para diagramacao dos componentes ou estilizacao da pagina
 * @returns JSX.Element
 */

const About = ({ data }): JSX.Element => {

  const hero = data.content[0];

  return (
    <div>
      <Layout>
        <Hero title={hero?.title} subtitle={hero?.subtitle} />
      </Layout>
    </div>
  );
};

export default About;
