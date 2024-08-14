import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import StoreContextProvider from './StoreContex/Storecontex'

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
<StoreContextProvider>
<App /> 
</StoreContextProvider>
 </BrowserRouter>
 
)
