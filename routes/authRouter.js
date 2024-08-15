import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const router = express.Router()

router.post('/register', async(req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error)
  }
})

export default router