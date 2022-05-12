
const { setError } = require('../../utils/error/error');
//importo el uuid
const { v4: uuidv4 } = require('uuid');
//traigo stripe para backend y pasar el secret key

const Order = require('../Orders/orders.model');

const stripe = require("stripe")(process.env.PRIVATE_STRIPE);



//debo recibir los datos del pago al back y desde aqui mandar los datos para hacer el cargo 

const checkOut = async (req, res, next) => {

    const {token, subtotal, user, cartProducts} = req.body
    try {
     
        console.log(JSON.stringify(token))
          console.log(user);
       const customer = await stripe.customers.create({

            email : token.email,
            source: token.id
        })
        
       console.log("Customer: "+JSON.stringify(customer));
       console.log("Token: "+JSON.stringify(token));
       console.log("Subtotal: "+subtotal);


        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: "EUR",
            customer: customer.id,
            receipt_email: token.email 
        })
        
        
        if(payment.status === "succeeded"){
            console.log(req.body)
            const order = new Order({
            orderedProducts: cartProducts ,
            userId:  user._id, 
            userName:  user.name, 
            email: user.email , 
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city, 
                country: token.card.address_country,
                postcode:  token.card.address_zip, 
            } , 
            transactionId: token.card.id, 
             totalPrice: subtotal
            })
    
             order.save();
           
            res.send('Payment done') 
        } else{
            res.send('payment failed')
        }
    } catch (error) {

        console.log(error);
        return next(setError(400, 'something went wrong'));
    }
}

module.exports = {checkOut} 