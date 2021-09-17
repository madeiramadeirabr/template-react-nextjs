import type { NextPage } from 'next';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import HomeModule from '@modules/home/index';
import getHomePageData, { getHomePageDataResult } from '@services/dato/getHomePageData';

export async function getStaticProps({
  preview = false,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
  const pageData: getHomePageDataResult = await getHomePageData({ preview });

  return {
    props: {
      preview: preview || null,
      content: pageData.data.about,
    },
    revalidate: 900,
  };
}

type HomeProps = {
  content?: any;
};

const Home: NextPage<HomeProps> = ({ content }) => <HomeModule data={content} />;

export default Home;
