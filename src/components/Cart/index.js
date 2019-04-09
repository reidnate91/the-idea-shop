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
  //  const itemCount = items.map(item => item.name)
 
  // const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
  // const count = fruitBasket.reduce( (tally, fruit) => {
  //   tally[fruit] = (tally[fruit] || 0) + 1 ;
  //   return tally;
  // } , {})


//  console.log(itemCount)

const itemsDisplay = Object.values(items.reduce((acc, cur) => {
    let count = `${cur.name}`;
    if (!acc[count]) acc[count] = {... cur, qty: 1}
    else acc[count].qty += 1;
    return acc;




  
// const count = items.map(item => item.name )

// const count2 = items.reduce((acc, cur) => {
  
//   acc.name = (acc.name || 0) + 1
 
// return acc
}, {} ))


// .reduce((tally, cartItem) => {

//   if (!tally[cartItem]) {
 
//   tally[cartItem] = 1;
 
//   } else {
 
//   tally[cartItem] = tally[cartItem] + 1;
 
//   }
 
//   return tally;
 
//  }, {});
 
 console.log(itemsDisplay)

 function removeItem (event) {
    event.preventDefault()
    

 }
 
 
return (
    <>
    <table>
            <tbody>
             
      {itemsDisplay.map((item, i) => {
        return (
         
        <tr key={i}>
        <td>{item.qty}</td>
            <td>{item.name}</td>
            
            <td>{usd(item.price * item.qty)}</td>
            {/* <td>{count}</td> */}
          
          <td> <button onClick= 'removeItem()'>Delete </button> </td>
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
