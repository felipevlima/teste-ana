import { useState } from 'react';
import './App.css';
import { GithubApi } from './services/gitHubApi';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Home } from './pages/Home';
import { Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
