import { gql } from "graphql-request";
import { hygraphClient } from "../plugins/graphQl";

export const getRestaurents = async () => {
  const QUERY = gql`
    {
      restaurants {
        id
        name
        rating
        address
        lat
        long
        image {
          id
          url
        }
        shortDescription
      }
    }
  `;
  return hygraphClient.request(QUERY);
};
