const db = require('./models/db')

const user = db.user
const fund = db.fund

user.create({
    firstName:'Carl2',
    lastName: 'Chen2',
    email: 'hsipl2062@hahaha.com'
}).then(() =>{
    console.log('insert done!')
})



