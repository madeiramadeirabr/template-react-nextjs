import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer component: ', () => {
  it('expect Flex children to display correctly', () => {
    const { container } = render(
      <Footer>
        <p>Eu sou um nó filho</p>
      </Footer>
    );

    const elem = container.querySelector('div');
    const child = elem.querySelector('p');

    expect(child).toBeInTheDocument();
  });
});
