import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    //completely wiping out the data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    //first one from users.js array
    const adminUser = createdUsers[0]._id

    //just adding admin user to each one
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    //includes all the Product data including admin user
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
    //exit with failure
  }
}

const destroyData = async () => {
  try {
    //completely wiping out the data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
    //exit with failure
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
