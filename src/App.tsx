import { useState } from 'react';
import './App.css';
import { GithubApi } from './services/gitHubApi';
import { useForm } from 'react-hook-form'
import axios from 'axios';

interface FormProps {
  searchString: string
}

interface ResponseGithub  {
  title: "Minimal Repository",
  description: "Minimal Repository",
  owner: {
    login: string,
    avatar_url: string
  }
  updated_at: string
  language_url: string
}

function App() {
  const [repositories, setRepositories] = useState<ResponseGithub[]>([])
  const { handleSubmit, register } = useForm<FormProps>({ defaultValues: { searchString: '' } })

  const submitForm = async (formValues: FormProps) => {
    const { data } = await GithubApi.get(`/search/repositories?q=${formValues.searchString}`)
    
    if (!data) {
      return
    }

    const parsedResponse = data.items.map(async (item: any) => {
      const { data: languageData } = await axios.get(item.languages_url)

      return {
        ...item,
        languages: Object.keys(languageData)
      }
    })

    console.log(parsedResponse)

    setRepositories(data.items)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)}>
        <input placeholder='Buscar por' {...register('searchString')}/>
        <button type='submit'>Buscar</button>
      </form>
      {repositories?.map(repositorie => (
       <div>
        <pre>{JSON.stringify(repositorie)}</pre>
       </div>
      ))}
    </div>
  );
}

export default App;
