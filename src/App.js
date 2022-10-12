
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          
          element:<Home></Home>
        },
        {
          path:'/topics',
          loader:async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Topics></Topics>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/quize/:quizeId',
          loader: async ({params}) => {
            //console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`)
          },
          element:<QuizDetails></QuizDetails>

        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
