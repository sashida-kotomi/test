import React from 'react';
import HeaderComponents from '../components/Molecules/HeaderComponents';
import BasicButton from '../components/Atoms/BasicButton';
import './DetailPage.css';

export default function DetailPage() {
  return(
    <div>
      <HeaderComponents/>
      <p>詳細ページ</p>
        {/* ・検索結果項目の詳細を表示する */}
        <table className='dessertdetail'>
          <tr>
            <th>Dessert:</th>
            <td>Frozen yoghurt</td>
          </tr>
          <tr>
            <th>Calories:</th>
            <td>159</td>
          </tr>
          <tr>
            <th>Fat (g):</th>
            <td>6</td>
          </tr>
          <tr>
            <th>Carbs (g):</th>
            <td>24</td>
          </tr>
          <tr>
            <th>Protein (g):</th>
            <td>4</td>
          </tr>
        </table>
          <div className='productintroduction'>
            <p>フローズンヨーグルトは、ヨーグルトを冷凍して作ったデザートで、アイスクリームと似た食感ですが、低脂肪でヘルシーな点が特徴です。 <br />
            ヨーグルトをベースにしているため、乳酸菌を含んでおり、腸内環境の改善に役立つことが期待できます。 <br />
            また、アイスクリームよりもカロリーが低いため、ダイエット中の方や健康を気にする方にも人気です。</p>
            <p>作り方</p>
            <p>ヨーグルトを準備: ボウルにプレーンヨーグルトを入れます。<br />
                甘さを調整: はちみつまたは砂糖を加え、よく混ぜます。甘さはお好みで調整してください。 <br />
                バニラエッセンスを加えると、風味が豊かになります。<br />
                冷凍: ヨーグルトを容器に移し、ラップをかけて冷凍庫に入れます。1時間ほど経ったら、フォークでかき混ぜて、 <br />
                冷凍焼けを防ぎ、滑らかな食感にします。これを3〜4回繰り返します。<br />

                完成: 約4〜6時間後、フローズンヨーグルトが固まり、滑らかな食感に仕上がります。 <br />
                お好みでフルーツやナッツをトッピングして、楽しんでください。</p>
          </div>






      <div className='button2'>
      <BasicButton size="large" color="primary" label='一覧ページに戻る' />
    </div>
    </div>




  )
}