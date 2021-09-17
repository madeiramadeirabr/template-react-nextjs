import { GraphQLClient } from 'graphql-request';

const DatoCMSFetch = async (
  query: string,
  { preview = false, variables = {} } = {}
): Promise<any> => {
  const endpoint = preview ? `${process.env.DATO_CMS_URL}/preview` : process.env.DATO_CMS_URL;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DATO_CMS_READONLY_API_TOKEN}`,
    },
  });

  try {
    return await graphQLClient.request(query, variables);
  } catch (error) {
    throw new Error('Failed to fetch graphQL API');
  }
};

export default DatoCMSFetch;
