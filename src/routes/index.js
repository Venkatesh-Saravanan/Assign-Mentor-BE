const express = require('express')
import MentorRoutes from './mentor.js'
import StudentRoutes from './student.js'


const router = express.Router()


router.use('/mentors',MentorRoutes)

router.use('/students',StudentRoutes)



export default router