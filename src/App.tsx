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
{/* 
     <ul>
        <li> <a href='/'>Home</a></li>
        <li> <a href='/about'>About</a></li>
        <li> <a href='/contact'>Contact</a></li>
     </ul>

     <div>
      <p>・ボタンコンポーネントの作成</p>
      <BasicButton size="large" color="primary" label='a' />
    </div>

    <div>
      <p>・チェックボックスコンポーネントの作成</p>
      <CheckBox size="small" color="primary" />
    </div>

    <div>
      <p>ラジオボタンコンポーネントの作成</p>
      <RowRadioButtonsGroup size="small" color="primary" label='AAA' />
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
      <OutlinedCard />
    </div>

    <div>
      <CirclarIndeterminante />
    </div>

    <div>
      <p>テーブル</p>
      <BasicTable withCheckbox={true} />
    </div>

    <div>
      <p>menu</p>
      <BasicMenu label='メニュー' />
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

    <div>
      <SearchForm />
    </div>

    <div>
      <HeaderComponents />
    </div>

    <div>
    <BasicTable withCheckbox={true} />
    </div>  */}

    {/* <div>
      <TopPage />
    </div> */}

    {/* <div>
      <Signup />
    </div>

    <EditingPage />
    <DetailPage />  */}
 
<Routes>
      <Route>
          <Route path="/" element={<TopPage />} />     
          <Route path="/DetailPage" element={<DetailPage />} /> 
          <Route path="/DetailPage2" element={<DetailPage2 />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/EditingPage" element={<EditingPage />} />  
      </Route>
</Routes>


 </div>
);
}

export default App;
