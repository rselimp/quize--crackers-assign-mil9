
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Page404 from './components/Page404/Page404';
import OptionDetails from './components/QuizDetails/OptionDetails';
import QuizDetails from './components/QuizDetails/QuizDetails';
import ViewQuizeDetails from './components/QuizDetails/ViewQuizeDetails';

import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';


//1.install react router:npm i react router dom
//2.create a react use createBrowserRouter
//3.Add router provider and pass router props
// 4.crete some route
//5. create  children route


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
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
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
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

        },
        {
          path:'/viewquize/:viewquizeId',
          loader: async ({params}) => {
            //console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.viewquizeId}`)
          },
          element:<ViewQuizeDetails></ViewQuizeDetails>

        },
        {
          path:'/*',
          element:<Page404></Page404>
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
