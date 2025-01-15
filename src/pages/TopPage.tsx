import React from 'react';
import BasicButton from '../components/Atoms/BasicButton';
import SearchForm from '../components/Molecules/SearchForm';
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

      <div className='registration'>
      <Link to={'/Signup'}>
      <BasicButton size="large" color="primary" label='新規登録' type="button" />
      </Link>
      </div>


    </div>
  )
}