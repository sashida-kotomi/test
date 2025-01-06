// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Button2 } from './components/Atoms/button2'
// import { Button3 } from './components/Atoms/button3'

// import { Button } from "./components/Atoms/button_react";

import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import NoMatch  from './pages/NoMatch';
import Layout from './layouts/Default';
import Button from './pages/Button';
import Checkbox from './pages/Checkbox';
import DirectionButton from './pages/DirectionButton';
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
        {/* <li> <a href='/button'>button</a></li> */}
     </ul>

     {/* // 課題1[ボタンコンポーネントの作成] */}
     <div>
      <h1>ボタンコンポーネントの作成</h1>
      <Button size="small" color="blue" />
      <Button size="large" color="green" />
      <Button size="small" color="red" />
    </div>


    <div>
    <h1>チェックボックスコンポーネントの作成</h1>
      <Checkbox size="small" color="blue" label="checkbox1" />
      <Checkbox size="large" color="green" label="checkbox2" />
      <Checkbox size="small" color="red" label="checkbox3" />
    </div>

    {/* <div className="App">
      <h1>Direction Selector</h1>
      <DirectionRadioGroup /> {/* DirectionRadioGroupコンポーネントをここで呼び出し */}
    {/* </div> */} 

<div>
  <h1>Directionのところにある4種類のボタンを作成</h1>
    <DirectionButton size="small" color="blue" direction="up" />
    <DirectionButton size="large" color="green" direction="down" />
    <DirectionButton size="small" color="red" direction="left" />
    <DirectionButton size="large" color="pink" direction="right" />
</div>

    

     <Routes>
      <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='company' element={<Company/>} />
          <Route path='/*' element={<NoMatch/>} />

          <Route path='button' element={<Button/>}/>
          <Route path='checkbox' element={<Checkbox />} />
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