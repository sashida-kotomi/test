// import React from 'react';
import BasicButton from '../Atoms/BasicButton';
import BasicMenu from '../Atoms/BasicMenu';
import './HeaderComponent.css'

export default function HeaderComponents() {

  return(

<div className="header_container">
  <div className="headeritem">
    <div className="menu">
      <BasicMenu label="メニュー" />
      <BasicButton size="small" color="primary" label="アイコン" />
      <BasicButton size="small" color="primary" label="サブタイトル" />

    {/* <div className="login"> */}
      <BasicButton size="small" color="primary" label="ログイン" />
    {/* </div> */}
    </div>
  </div>
</div>

  )
}