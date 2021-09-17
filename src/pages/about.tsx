import Head from 'next/head';
import type { NextPage } from 'next';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

import AboutModule from '@modules/about/index';
import getAboutPageData, { getAboutPageDataResult } from '@services/dato/getAboutPageData';

export async function getStaticProps({
  preview = false,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
  const aboutPageData: getAboutPageDataResult = await getAboutPageData({ preview });

  return {
    props: {
      preview: preview || null,
      content: aboutPageData.data.about,
    },
    revalidate: 900,
  };
}

type AboutProps = {
  content?: any;
};

const About: NextPage<AboutProps> = ({ content }) => {
  console.log(content);

  return <AboutModule data={content} />;
};

export default About;
