import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    keySpecifications {
        ARAIMileage
        FuelType
        MaxPower
    }
  }
`;
