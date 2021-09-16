import Layout from "@components/feature/Layout";

/**
 * About Module
 *
 * Funcionalidades para pagina About
 *
 * @param template: string que defina novas variacoes para diagramacao dos componentes ou estilizacao da pagina
 * @returns JSX.Element
 */

const About = ({ template }): JSX.Element => {
  return (
    <div>
      <Layout>Hey Im about page; I'm using ``${template}`` template page.</Layout>
    </div>
  );
};

export default About;
