const bcrypt = require('bcryptijs')
const Users = require('./users-models')

function restrict(){

    return async (req, res, next) => {
        try {  
// 			const { username, password } = req.headers
// 			// make sure the values are not empty
// 			if (!username || !password) {
// 				return res.status(401).json({
// 					message: "Invalid credentials",
// 				})
// 			}
// 
// 			const user = await Users.findBy({ username }).first()
// 			if (!user) {
// 				return res.status(401).json({
// 					message: "Invalid credentials",
// 				})
// 			}
// 
// 			const passwordValid = await bcrypt.compare(password, user.password)
// 			if (!passwordValid) {
// 				return res.status(401).json({
// 					message: "Invalid credentials",
// 				})
// 			}

			if (!req.session || !req.session.user) {
				return res.status(401).json({
					message: "Invalid credentials",
				})	
            }

            // everything validated, we're good to go
            next()
        }catch (err) {
            next(err)
        }
    }
}

module.exports = {
	restrict,
}