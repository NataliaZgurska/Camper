import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <HelmetProvider>
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   </HelmetProvider>
// );
