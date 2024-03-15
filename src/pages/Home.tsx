import { useState } from "react"
import { GithubApi } from "../services/gitHubApi"
import { useForm } from "react-hook-form"
import { CardContainer, HomeContainer } from "./Home.styles"

interface FormProps {
  searchString: string
}

interface ResponseGithub  {
  title: "Minimal Repository",
  description: "Minimal Repository",
  full_name: string
  owner: {
    login: string,
    avatar_url: string
  }
  updated_at: string
  language_url: string
}

export const Home = () =>{
  const [isLoading, setIsLoading] = useState(false)
  const [repositories, setRepositories] = useState<ResponseGithub[]>([])
  const { handleSubmit, register } = useForm<FormProps>({ defaultValues: { searchString: '' } })

  const submitForm = async (formValues: FormProps) => {
    setIsLoading(true)
    const { data } = await GithubApi.get(`/search/repositories?q=${formValues.searchString}`)
    setIsLoading(false)
    if (!data) {
      return
    }

    setRepositories(data.items)
  }

  return ( 
    <HomeContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        <input placeholder='Buscar por' {...register('searchString')}/>
        <button type='submit'>Buscar</button>
      </form>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {repositories?.map((repositorie: ResponseGithub) => (
          <CardContainer>
              <h2>{repositorie.full_name}</h2>
              <p>{repositorie.description}</p>
              <span>{repositorie.updated_at}</span>
          </CardContainer>
          ))}
        </>
      )}
    </HomeContainer>
  )
}