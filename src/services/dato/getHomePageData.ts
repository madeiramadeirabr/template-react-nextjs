import DatoCMSFetch from '@utils/datocms';

const homePageDataQuery = /* GraphQL */ `
  query MyQuery {
    about {
      content {
        backgroundImage {
          url
        }
        title
        subtitle
        datolink
      }
    }
  }
`;

export type getHomePageDataResult = {
  data: Record<string, any>;
};

async function getHomePageData({
  preview,
}: {
  preview?: boolean;
} = {}): Promise<getHomePageDataResult> {
  const data = await DatoCMSFetch(homePageDataQuery, {
    preview,
  });

  return { data };
}

export default getHomePageData;
