import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicButton from '../components/Atoms/BasicButton';
import './DetailPage2.css';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  return(
    <div>
      
      <HeaderComponents/>
      <h1>詳細ページ</h1>

        <table className='dessertdetail'>
          <tr>
            <th>Dessert:</th>
            <td>Ice cream sandwich</td>
          </tr>
          <tr>
            <th>Calories:</th>
            <td>237</td>
          </tr>
          <tr>
            <th>Fat (g):</th>
            <td>9</td>
          </tr>
          <tr>
            <th>Carbs (g):</th>
            <td>37</td>
          </tr>
          <tr>
            <th>Protein (g):</th>
            <td>4.3</td>
          </tr>
        </table>
          <div className='productintroduction'>
          <p>アイスクリームサンドイッチは、人気のデザートで、クッキーやビスケットの間にアイスクリームを挟んだお菓子です。 <br />
          そのユニークな形状と食べやすさが、多くの人々に愛されています。</p>
          <p>人気のアイスクリームサンドイッチのバリエーション：</p>
          <h2>チョコレートチップクッキーアイスクリームサンドイッチ:</h2>
          <p>クラシックなチョコレートチップクッキーで、バニラやチョコレートアイスクリームを挟んだ定番の味。</p>
          <h2>オートミールクッキーアイスクリームサンドイッチ:</h2>
          <p>オートミールの風味豊かなクッキーで、シナモンやナッツ入りのアイスクリームをサンド。</p>
          <h2>アメリカンスタイルアイスクリームサンドイッチ: </h2>
          <p>しっかりとしたクッキーで、カラフルなスプリンクルやチョコレートチップをアイスクリームに付けて仕上げる豪華な一品。</p>

          </div>
      <div className='button2'>
      <Link to={'/'}>
    <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </Link>
    </div>
    </div>




  )
}