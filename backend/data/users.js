import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sai Teja',
    email: 'sai@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kumar Sanga',
    email: 'kumar@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
