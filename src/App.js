import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage';
import MainContainer from './components/MainContainer';
import CreateQuiz from './components/CreateQuiz';
import DisplayQuestions from './components/DisplayQuestions';
import StartTest from './components/StartTest';
import Evaluate from './components/Evaluate';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>,
      children:[
        {
          path:"/",
          element:<Login/>,
        },
        {
          path:"/maincontainer",
          element:<MainContainer/>,
        },
        {
          path:"/createquiz",
          element:<CreateQuiz/>,
        },
        {
          path:"/createquiz/seequestions",
          element:<DisplayQuestions/>,
        },
        {
          path:"/starttest/:id",
          element:<StartTest/>,
        },
        {
          path:"/evaluate/:id",
          element:<Evaluate/>,
        }
      ]
    },
  ])
  return (
    <Provider store={store}>
    <div className="App text-3xl">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
