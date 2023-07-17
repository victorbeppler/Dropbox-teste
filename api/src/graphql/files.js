import { createFile, deleteFile, files } from 'src/services/files/files'

export const resolvers = {
  Query: {
    files,
  },
  Mutation: {
    createFile,
    deleteFile,
  },
}
