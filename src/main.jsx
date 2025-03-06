import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css'
import Posts, {loader as postLoader } from './routes/Posts.jsx'
import NewPost, {action as actionNewPost} from './routes/NewPost.jsx';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails.jsx';
import RootLayout from './routes/RootLayout.jsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/', 
        element: <Posts />, 
        loader: postLoader,
        children: [ 
          { path: '/create-post', element: <NewPost/>, action: actionNewPost },
          { path: ':id', element: <PostDetails /> , loader: postDetailsLoader},
      ]},
  ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
