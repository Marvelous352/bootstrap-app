import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'
class Expenses extends React.Component{
  render(){
    return(
    <div className="table2">
				<div className="expenses">
					<h3>EXPENSES</h3>
					<Table bordered style={{width:"600"}} className="content">
          <thead>
            <tr>
              <th colSpan="2">ITEM/DESC</th>
              <th>QTY.</th>
              <th>@</th>
              <th>PRICE</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td colspan="2">Paperclip (Box)</td>
                <td>100</td>
                <td>1.15</td>
                <td>115.00</td>
              </tr>
              <tr>
                <td colspan="2">Paper (case)</td>
                <td>10</td>
                <td>45.99</td>
                <td>459.90</td>
              </tr>
              <tr>
                <td colspan="2">Wastepaper Baskets</td>
                <td>2</td>
                <td>17.99</td>
                <td>35.98</td>
              </tr>
              <tr>
                <td colspan="4">SUBTOTAL</td>
                <td>610.88</td>
              </tr>
              <tr>
                <td colspan="3">TAX</td>
                <td>7%</td>
                <td>42.76</td>
              </tr>
              <tr>
                <td colspan="4">TOTAL</td>
                <td>653.64</td>
              </tr>
            </tbody>
			</Table>

				</div>
			</div>

    )
  }
}

export default Expenses
