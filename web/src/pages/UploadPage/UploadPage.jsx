import { useRef, useState } from 'react'
import { useMutation, useQuery } from '@redwoodjs/web'
import gql from 'graphql-tag'
// import './styles.jsx'
import {
  Button,
  ButtonAction,
  Card,
  CardContainer,
  Container,
  DropZone,
  Footer,
  FooterLink,
  FooterText,
  Form,
  Icon,
  LeftColumn,
  Line,
  RightColumn,
  Title,
  TitleContainerLeft,
} from './styles'

const CREATE_FILE_MUTATION = gql`
  mutation CreateFileMutation($input: CreateFileInput!) {
    createFile(input: $input) {
      id
    }
  }
`
const DELETE_FILE_MUTATION = gql`
  mutation DeleteFileMutation($id: Int!) {
    deleteFile(id: $id) {
      id
    }
  }
`

const GET_FILES_QUERY = gql`
  query GetFilesQuery {
    files {
      id
      name
      path
      userId
    }
  }
`

const UploadPage = () => {
  const [file, setFile] = useState()
  const fileInputRef = useRef(null)
  const [createFile, { loading: uploadLoading, error: uploadError }] =
    useMutation(CREATE_FILE_MUTATION)
  const [deleteFile] = useMutation(DELETE_FILE_MUTATION)
  const {
    data,
    loading: queryLoading,
    error: queryError,
    refetch, // Função para recarregar os dados
  } = useQuery(GET_FILES_QUERY)

  const submitFile = async (event) => {
    event.preventDefault()

    if (!file) alert('Por favor, selecione um arquivo.')

    const reader = new FileReader()

    reader.onloadend = async () => {
      const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '')

      try {
        await createFile({
          variables: {
            input: {
              name: file.name,
              path: base64String,
              userId: 1, // substitua isso pelo ID de usuário correto
            },
          },
        })
        window.location.reload()
      } catch (error) {
        setFile(null)
        alert('Arquivo existente, selecione outro.')
      }
    }

    reader.readAsDataURL(file)
  }

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0])
  }

  const handleDeleteFile = async (id) => {
    if (window.confirm('Você tem certeza que quer deletar este arquivo?')) {
      try {
        await deleteFile({ variables: { id } })
        // Recarrega a lista de arquivos após a deleção
        refetch()
      } catch (error) {
        console.error('Erro ao deletar arquivo:', error)
      }
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    if (event.dataTransfer.items) {
      if (event.dataTransfer.items[0].kind === 'file') {
        var droppedFile = event.dataTransfer.items[0].getAsFile()
        console.log('... file[' + 0 + '].name = ' + droppedFile.name)
        setFile(droppedFile)
      }
    } else {
      for (var i = 0; i < event.dataTransfer.files.length; i++) {
        console.log(
          '... file[' + i + '].name = ' + event.dataTransfer.files[i].name
        )
        setFile(event.dataTransfer.files[i])
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const downloadFile = (file) => {
    const link = document.createElement('a')
    link.href = file.path
    link.download = file.name
    link.click()
  }

  return (
    <Container className="container">
      {/* <LeftColumn>
        <TitleContainerLeft>Pagina Inicial</TitleContainerLeft>
      </LeftColumn> */}
      <RightColumn>
        <Title>Upload de Arquivos</Title>
        <Form onSubmit={submitFile}>
          <DropZone
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {file
              ? file.name
              : 'Arraste e solte um arquivo PDF aqui, ou clique para selecionar'}
          </DropZone>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={fileSelectedHandler}
          />
          <Button type="submit">Upload</Button>
        </Form>
        {uploadLoading && <p>Carregando...</p>}
        <Line />
        <Title>Arquivos carregados:</Title>
        <CardContainer>
          {queryLoading ? (
            <p>Carregando arquivos...</p>
          ) : queryError ? (
            <p>Erro: {queryError.message}</p>
          ) : (
            data?.files.map((file) => (
              <Card key={file.id}>
                <p>Nome: {file.name}</p>
                <ButtonAction onClick={() => handleDeleteFile(file.id)}>
                  <Icon src="/trash-2.png" />
                </ButtonAction>
              </Card>
            ))
          )}
        </CardContainer>
        <Footer>
          <FooterText>Desenvolvido por: Victor Hugo B.P.</FooterText>
          <FooterLink href="https://victorbeppler.dev">
            https://victorbeppler.dev
          </FooterLink>
        </Footer>
      </RightColumn>
    </Container>
  )
}

export default UploadPage
