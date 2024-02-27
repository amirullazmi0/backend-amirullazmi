const Sequelize = require('sequelize')
const db = require('../database/db')

const userMigration = require('../migrations/user_migration')
const projectMigration = require('../migrations/project_migration')

userMigration.sync()
projectMigration.sync()
