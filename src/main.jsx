import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashborad from './Page/Dashborad/Dashborad';
import Team from './Page/Team/Team';


import App from './App';
import Contant from './Page/Contant/Contant';
import Invoices from './Page/Invoices/Invoices';
import From from './Page/From/From';
import Calendar from './Page/Calendar/Calendar';
import FAQ from './Page/FAQ/FAQ';
import BarChart from './Page/Barchark/BarChart';
import PieChart from './Page/pieChart/PieChart';
import LinChart from './Page/LinChar/LinChart';
import Geography from './Page/geography/Geography';
import { Box } from '@mui/material';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashborad />} />
      <Route path="team" element={<Box sx={{ overflow: "hidden" }}>
        <Team />

      </Box>} />
      <Route path="contacts" element={<Contant />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<From />} />
      <Route path="calendar" element={<Calendar />} />

      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<
        // @ts-ignore
        BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LinChart />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
