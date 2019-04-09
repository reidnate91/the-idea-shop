import React, {
  useState
} from 'react'
// let total=0;





// export default ({ items = [] }) => {

//   return (
//     <>
     

// {items.map((item, i) => (total += parseInt(item.price),
// <div key={i}>{item.name} {item.price}

// <input type="button" name="add" value="This one Removes" />
// </div> ))}

// <div>Total:
// {total}
// <input type="button" name="add" value="Nuke It!!" onClick={()=> this.DESTROYED = null}/>
// </div>

      
      
      
//     </>
//   )
// }






import FormatToMoney from 'format-money'

const TAX = 0.065
const SHIPPING = (itemsTotal) =>{
if (itemsTotal >= 100) {
  return 40
  } else {
   return 20
  }
}
const usd = value => FormatToMoney(value)

export default ({ items = [] }) => {
  // const itemsTotal = items.map(({ quantity, price }) => quantity * price).reduce((prev, current) => prev + current, 0)
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



 
 console.log(itemsDisplay)


 
 
return (
    <>



    <table>
            <tbody>
             
      {itemsDisplay.map((item, i) => {
        return (
         
        <tr key={i}>
        
       
            <td>{item.name}</td>
            
            <td>{usd(item.price )}</td>
             <td>{item.qty}</td>
            {/* <td>{count}</td> */}
          
          <td> <input type="number" onChange="quantityChange()"/> </td>
          </tr>
          
        )
      })}
      </tbody>
          </table>
      
      <div name="sub">Sub Total: {usd(itemsTotal)}</div>
      <div name="tax">Tax: {usd(tax)}</div>
      <div name="shipping">Shipping: {usd(shipping)}</div>
      <div name="total">Total: {usd(total)}</div> 
     
    </>
  )
} 
