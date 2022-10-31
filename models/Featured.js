import { gql } from "graphql-request";
import { hygraphClient } from "../plugins/graphQl";

export const getFeatureds = async () => {
  const QUERY = gql`
    {
      featureds {
        id
        name
        shortDescription
        restaurants {
          id
          name
          rating
          address
          lat
          long
          dishes {
            id
            name
            image {
              id
              url
            }
          }
          image {
            id
            url
          }
          shortDescription
        }
      }
    }
  `;
  let data = await hygraphClient.request(QUERY);
  return data;
};

export const getFeatured = async (id) => {
  const QUERY = gql`
    {
      featured(where: { id: "${id}" }) {
        id
        name
        shortDescription
        restaurants {
          id
          name
          rating
          genre
          address
          lat
          long
          dishes {
            id
            name
            price
            shortDescription
            image {
              id
              url
            }
          }
          image {
            id
            url
          }
          shortDescription
        }
      }
    }
  `;
  let data = await hygraphClient.request(QUERY);
  return data;
};
