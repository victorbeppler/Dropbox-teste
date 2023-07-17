export const schema = gql`
  type File {
    id: Int!
    name: String!
    path: String!
    userId: Int!
  }

  type Query {
    files: [File!]! @skipAuth
    file(id: Int!): File @skipAuth
  }

  input CreateFileInput {
    name: String!
    path: String!
    userId: Int!
  }

  input UpdateFileInput {
    name: String
    path: String
    userId: Int
  }

  type Mutation {
    createFile(input: CreateFileInput!): File! @skipAuth
    updateFile(id: Int!, input: UpdateFileInput!): File! @skipAuth
    deleteFile(id: Int!): File! @skipAuth
  }
`
