import DatoCMSFetch from '@utils/datocms';

const aboutPageDataQuery = /* GraphQL */ `
  query MyQuery {
    about {
      content { 
        backgroundImage {
          url
        },
        title,
        subtitle
      }
    }
  }
`;

type getAboutPageDataResult = {
  data: Record<string, any>;
};

async function getAboutPageData({
  preview,
}: {
  preview?: boolean;
} = {}): Promise<getAboutPageDataResult> {
  
  const data = await DatoCMSFetch(aboutPageDataQuery, {
    preview,
  });

  return {data};
}

export default getAboutPageData;
