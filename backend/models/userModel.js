import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  //with mongoose we are passing second argument as options(i.e; timestamps), create those fields automatically
  {
    timestamps: true,
  }
)

const User = mongoose.model('User',userSchema)

export default User