import { db } from 'src/lib/db'

export const files = () => {
  return db.file.findMany()
}

export const file = ({ id }) => {
  return db.file.findUnique({
    where: { id },
  })
}

export const createFile = async ({ input }) => {
  const existingFile = await db.file.findFirst({
    where: { name: input.name },
  })
  console.log(existingFile)

  if (existingFile) {
    return 'Arquivo com o mesmo nome já existe'
  }

  return db.file.create({
    data: input,
  })
}

export const updateFile = ({ id, input }) => {
  return db.file.update({
    data: input,
    where: { id },
  })
}

export const deleteFile = ({ id }) => {
  return db.file.delete({
    where: { id },
  })
}
