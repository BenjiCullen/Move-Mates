import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query getProducts($Service: ID) {
    products(Service: $Service) {
      _id
      name
      description
      price
      quantity
      image
      Service {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      Service {
        name
      }
    }
  }
`;

export const QUERY_ServiceS = gql`
{
  Services {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    email
    
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;