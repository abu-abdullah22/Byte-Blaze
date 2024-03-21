import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Home from "../Pages/Home"
import Blogs from "../Pages/Blogs"
import Blog from "../Pages/Blog"
import Bookmarks from "../Pages/Bookmarks"
import Content from "../Components/Content"
import Author from "../Components/Author"

export const router = createBrowserRouter([
    {
      path : '/',
      element : <MainLayout/>,
      children : [
        {
          path : '/', 
          element : <Home></Home>
        },
        {
          path: '/blogs',
          element : <Blogs></Blogs>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: '/bookmarks',
          element : <Bookmarks></Bookmarks>
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children : [
            {
                index: true ,
                element: <Content></Content>
            },
            {
                path: 'author',
                element: <Author></Author>
            }
          ]
        }
      ]
    }
  ])