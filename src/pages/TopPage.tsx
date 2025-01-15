import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicTable from '../components/Atoms/BasicTable';
import './TopPage.css';
import { Link } from 'react-router-dom';


export default function TopPage () {
  return(
    
    <div className='toppage'>

      <div className='header'>
        <HeaderComponents />
      </div>
      <div className='main'>
        <h1>一覧画面</h1>
        {/* <SearchForm /> */}
        <BasicTable />
      </div>

    </div>
  )
}