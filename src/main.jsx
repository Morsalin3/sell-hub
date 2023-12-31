import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './contexts/AuthProvider';
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
      <Toaster/>
      </div>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
