import Table from "react-bootstrap/Table";
import { CSpinner } from "@coreui/react";
import sort_up from "../../assets/images/sort-up.svg";
import sort_down from "../../assets/images/sort-down.svg";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const DataTable = ({
  headers,
  data,
  handleViewItem,
  isLoading,
  handleSortUp,
  handleSortDown,
  hasDeleteBtn,
  handleDeleteItem,
  handleUpdateItem
}) => {
  let displayHeaders = [];
  if (headers?.length > 0) {
    displayHeaders = headers.map((el) => {
      return (
        <th className="table-headers-text">
          <div className="d-flex">
            <div>{el.label || "-"}</div>
            <div className="table-sort-container ml-2">
              {el.isSort && (
                <>
                  <img src={sort_up} onClick={handleSortUp} />
                  <img src={sort_down} onClick={handleSortDown} />
                </>
              )}
            </div>
          </div>
        </th>
      );
    });
  }

  let displayBody = [];
  if (data?.length > 0) {
    displayBody = data.map((row, id) => {
      let newObj = Object.assign({}, row);
      newObj.actions = (
        <div style={{display: 'flex', gap: 10, justifyContent: 'flex-end'}}>
          <div onClick={() => handleViewItem(row)}>
            <RemoveRedEyeIcon style={{width: 16, height: 16, cursor: 'pointer'}}/>
          </div>
          <div onClick={() => handleUpdateItem(row)}>
            <EditIcon style={{width: 16, height: 16, cursor: 'pointer'}}/>
          </div>
          {/* {true && <div onClick={() => handleDeleteItem(row)}>
            <DeleteIcon style={{width: 16, height: 16, cursor: 'pointer', color: '#ff9494'}}/>
          </div>} */}
        </div>
      );
      return (
        <tr className="table-row-item">
          {headers.map((el) => {
            return (
              <td className={`table-body-text ${newObj[el.value]}`}> {newObj[el.value] || "-"}</td>
            );
          })}
        </tr>
      );
    });
  }

  return (
    <Table hover striped>
      <thead>
        <tr>{displayHeaders}</tr>
      </thead>
      <br />
      <tbody>
        {isLoading ? (
          <td colSpan={7}>
            <CSpinner
              color="warning"
              style={{ margin: "auto", display: "flex" }}
            />
          </td>
        ) : (
          displayBody
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
