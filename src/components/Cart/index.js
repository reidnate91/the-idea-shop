import React, {
  useState
} from 'react'

import FormatToMoney from 'format-money'


const TAX = 0.065
const SHIPPING = (itemsTotal) =>{
if (itemsTotal >= 100) {
  return 20
  } else {
   return 10
  }
}
const usd = value => FormatToMoney(value)

export default ({ items = [] }) => {
  const itemsTotal = items.map(item => parseInt(item.price)).reduce((acc,cur) => acc + cur, 0 )
  const tax = itemsTotal * TAX
  const shipping = SHIPPING(itemsTotal)
  const total = itemsTotal + tax + shipping
 
  

const itemsDisplay = Object.values(items.reduce((acc, cur) => {
    let count = `${cur.name}`;
    if (!acc[count]) acc[count] = {... cur, qty: 1}
    else acc[count].qty += 1;
    return acc;

}, {} ))

const updateCart = () => { 
 
 localStorage.clear()
 window.location.reload()

}




  
return (
    <>



    <table>
            <tbody>
             
      {itemsDisplay.map((item, i) => {
        return (
         
        <tr key={i}>
        
       
            <td>{item.name}</td>
            
            <td>{usd(item.price )}</td>
             
           
          
          <td> <input name="number" id= "number" type="number" min="0" defaultValue={item.qty} /> </td>
          <td>{usd(item.qty * item.price)}</td>
        
          </tr>
          
        )
      })}
      </tbody>
          </table>
          <form>
          <input type='button' id="myBtn" value="Empty Cart" onClick={updateCart}/>
          </form>
      <div name="sub">Sub Total: {usd(itemsTotal)}</div>
      <div name="tax">Tax: {usd(tax)}</div>
      <div name="shipping">Shipping: {usd(shipping)}</div>
      <div name="total">Total: {usd(total)}</div> 
     
    </>
  )
} 
