import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import React from 'react'
// import './scss/style.scss'
// import { Button2 } from './components/Atoms/button2'
// import { Button3 } from './components/Atoms/button3'

// import { Button } from "./components/Atoms/button_react";

// import React, {useState} from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Company from './pages/Company';
// import NoMatch  from './pages/NoMatch';
// import Layout from './layouts/Default';
// // import Button from './pages/Button';
// // import Checkbox from './pages/Checkbox';
// import BasicButton from './components/Atoms/BasicButton';
// import CheckBox from './components/Atoms/CheckBox';
// import RowRadioButtonsGroup from './components/Atoms/RowRadioButton';
// import SwitchLabel from './components/Atoms/SwitchLabels';
// import BasicTextField from './components/Atoms/BasicTextField'
// import BasicTooltip from './components/Atoms/BasicTooltip'
// import PaginationRounded from './components/Atoms/PaginationRounded'
// import CirclarIndeterminante from './components/Atoms/CirclarIndeterminante';
// import BasicMenu from './components/Atoms/BasicMenu'
// import BasicModal from './components/Atoms/BasicModal'
// import AlertDialog from './components/Atoms/AlertDialog'
// import AccordionExpandIcon from './components/Atoms/BasicAccordion';
// import OutlinedCard from './components/Atoms/BasicCard';
// import SearchForm  from './components/Molecules/SearchForm';
// import HeaderComponents from './components/Molecules/HeaderComponents';
// import BasicTable from './components/Atoms/BasicTable';
import TopPage from './pages/TopPage';
import Signup from './pages/Signup';
import DetailPage from './pages/DetailPage';
import DetailPage2 from './pages/DetailPage2';

import EditingPage from './pages/EditingPage';
import {useNavigate} from 'react-router-dom'
import  { useState } from 'react';



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
type User = {
  id: number;
  name: string;
  age: number;
};

export default function App(){

  const [searchTerm, setSearchTerm] = useState<string>('');
// 最初のデータ
const initialData: User[] = [
  { id: 1, name: "山田太郎", age: 25 },
  { id: 2, name: "鈴木一郎", age: 30 },
  { id: 3, name: "佐藤花子", age: 28 },
];
const handleSearch = (term: string) => {
  setSearchTerm(term);
};


const [data, setData] = useState<User[]>(initialData); // 状態を管理

  return(
  <div className = 'App'>
    
<Routes>
      <Route>
          <Route path="/" element={<TopPage />} />     
          <Route path="/detail/:id" element={<DetailPage users={data} />} />
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/edit/:id" element={<EditingPage />} />  {/* 編集ページに遷移 */}
          {/* <Route path="/edit/:id" element={<BasicTable data={data} setData={setData} />} /> */}
      </Route>
</Routes>


 </div>
);
}

