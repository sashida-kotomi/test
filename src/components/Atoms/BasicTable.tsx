import * as React from 'react';
import './BasicTable.scss';
import BasicButton from './BasicButton';
import { Link } from 'react-router-dom';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// 初期データ
const initialRows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface BasicTableProps {
  withCheckbox?: boolean;
}

export default function BasicTable({ withCheckbox = false }: BasicTableProps) {
  // 行の状態を管理
  const [rows, setRows] = React.useState(initialRows);

  // チェックボックスの選択状態を管理
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

  // チェックボックスの選択状態を切り替える関数
  const handleCheckboxChange = (name: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(name)) {
      newSelectedRows.delete(name);
    } else {
      newSelectedRows.add(name);
    }
    setSelectedRows(newSelectedRows);
  };

  // 行を削除する関数
  const handleDelete = (name: string) => {
    // 削除する行を除いた新しい配列を作成
    const newRows = rows.filter(row => row.name !== name);
    setRows(newRows); // 更新された行を状態にセット
  };

  return (
    <div className="table-container">
      <table className="basic-table">
        <thead>
          <tr>
            {withCheckbox && <th><input type="checkbox" /></th>} {/* チェックボックスのヘッダー */}
            <th>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
            <th>Protein (g)</th>
            <th>編集</th>
            <th>詳細</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              {withCheckbox && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.name)}
                    onChange={() => handleCheckboxChange(row.name)}
                  />
                </td>
              )}
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
             
              <td>
                <Link to={'/EditingPage'}>
                  <BasicButton size="small" color="primary" label="編集" />
                </Link>
              </td>
              <td>
                <Link to={row.name === 'Ice cream sandwich' ? '/DetailPage2' : '/DetailPage'}>
                  <BasicButton size="small" color="primary" label="詳細" />
                </Link>
              </td>
              <td>
                <BasicButton 
                  size="small" 
                  color="primary" 
                  label="削除" 
                  onClick={() => handleDelete(row.name)} // 削除処理を追加
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
