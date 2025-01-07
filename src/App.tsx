// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Button2 } from './components/Atoms/button2'
// import { Button3 } from './components/Atoms/button3'

// import { Button } from "./components/Atoms/button_react";

// import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import NoMatch  from './pages/NoMatch';
import Layout from './layouts/Default';
// import Button from './pages/Button';
// import Checkbox from './pages/Checkbox';
import BasicButton from './components/Atoms/BasicButton';
import CheckBox from './components/Atoms/CheckBox';
import RowRadioButtonsGroup from './components/Atoms/RowRadioButton';
import SwitchLabel from './components/Atoms/SwitchLabels';
import BasicTextField from './components/Atoms/BasicTextField'
import BasicTooltip from './components/Atoms/BasicTooltip'
import PaginationRounded from './components/Atoms/PaginationRounded'
import CirclarIndeterminante from './components/Atoms/CirclarIndeterminante';
import BasicMenu from './components/Atoms/BasicMenu'
import BasicModal from './components/Atoms/BasicModal'
import AlertDialog from './components/Atoms/AlertDialog'
import AccordionExpandIcon from './components/Atoms/BasicAccordion';
// import OutlinedCard from './components/Atoms/BasicCard';


// import {useNavigate} from 'react-router-dom'



// 課題1[ボタンコンポーネントの作成]
// import Button from './pages/Button';

// const App: React.FC = () =>{
//   return (
//     <div className="App">
//     <h1>React Route</h1>
//     <h1>Links</h1>
//     <ul>
//         <li> <a href="/">Home</a> </li>
//         <li> <a href="/about">About</a> </li>
//         <li> <a href="/company">Company</a> </li>
//     </ul>
//     <Routes>
//         {/*ここにlayoutのコンポーネントが表示されます*/}
//         <Route element={<Layout />}>
//             {/*ここにpagesのコンポーネントが表示されます*/}
//             <Route path="/" element={<Home/>} />
//             <Route path="/about" element={<About/>} />
//             <Route path="/company" element={<Company/>} />
//             <Route path="*" element={<NoMatch />} />
//         </Route>
//     </Routes>

// </div>
//   );
// };

function App(){
  return(
  <div className = 'App'>
    <h1>Hello React Router v6</h1>

     <ul>
        <li> <a href='/'>Home</a></li>
        <li> <a href='/about'>About</a></li>
        <li> <a href='/contact'>Contact</a></li>
     </ul>

     <div>
      <p>・ボタンコンポーネントの作成</p>
      <BasicButton size="large" color="primary" />
    </div>

    <div>
      <p>・チェックボックスコンポーネントの作成</p>
      <CheckBox size="small" color="primary" />
    </div>

    <div>
      <p>ラジオボタンコンポーネントの作成</p>
      <RowRadioButtonsGroup size="large" color="primary" />
    </div>

    <div>
      <p>スイッチコンポーネントの作成</p>
      <SwitchLabel size="small" color="primary" />
    </div>

    <div>
      <p>テキストフィールドの作成</p>
      <BasicTextField size='large' color='primary' />
    </div>

    <div>
      <p>ツールチップ</p>
      <BasicTooltip />
    </div>
    <div>
      <p>ページネーション</p>
        <PaginationRounded />
    </div>

    <div>
      <BasicModal/>
    </div>

    <div>
      <p>ベーシックカード</p>
    </div>

    <div>
      <CirclarIndeterminante />
    </div>

    <div>
      <p>menu</p>
      <BasicMenu />
    </div>

    <div>
      <BasicModal />
    </div>

    <div>
      <AlertDialog />
    </div>

    <div>
      <AccordionExpandIcon />
    </div>


    <Routes>
      <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='company' element={<Company/>} />
          <Route path='/*' element={<NoMatch/>} />

          {/* <Route path='button' element={<Button/>}/> */}
      </Route>
     </Routes>
  </div>
);
}



export default App;


// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Button2 />} />
//       <Route path='button3' element={<Button3 />} />
//     </Routes>
//   </BrowserRouter>
//   )
// }

// export default App;

// function App() {
//   return(
//     <BrowserRouter>
//     <Routes>
//       {/* <Route element={<button />} /> */}
//       <Route path='/' element={<button />} />
//     </Routes>
//   </BrowserRouter>
//   )
// }



// // 課題1[ボタンコンポーネントの作成]
// import Button from './pages/Button';

// const ButtonApp = () => {
//   return (
//     <div>
//       <h1>ボタンコンポーネントの作成</h1>
//       <Button size="small" color="blue" />
//       <Button size="large" color="green" />
//       <Button size="default" color="red" />
//     </div>
//   );
// };

// export default ButtonApp;

// import { TodoList } from "./TodoList";
// import { Todo } from "./type";

// function App (){
//   const todos: Todo[] = [
//   { id: 1, title: "Do laundry", isCompleted: false },
//   { id: 2, title: "Buy groceries", isCompleted: true },
//   { id: 3, title: "Clean the house", isCompleted: false },
//   { id: 4, title: "Go for a run", isCompleted: true },
//   { id: 5, title: "Finish work project", isCompleted: false },
//   { id: 6, title: "Call mom", isCompleted: false },
//   { id: 7, title: "Read a book", isCompleted: true },
//   { id: 8, title: "Make dinner", isCompleted: false },
//   { id: 9, title: "Do yoga", isCompleted: false },
//   { id: 10, title: "Plan vacation", isCompleted: false },
//   ];
//   return (
//     <div>
//       <h1>My Todo List</h1>
//       <TodoList todos={todos} />
//     </div>
//   );
// }
// export default App;