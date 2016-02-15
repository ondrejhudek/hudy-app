/** DB configuration */
const DB_HOST = 'ds053295.mongolab.com:53295'
const DB_NAME = 'hudy-app-db'
const DB_USER = 'hudy'
const DB_PASSWORD = 'hudyapp'
export const DB_ENDPOINT = 'mongodb://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + '/' + DB_NAME

/** API **/
const API_ENDPOINT = 'http://localhost/api'
export const API_USERS = API_ENDPOINT + '/users'
export const API_TODOS = API_ENDPOINT + '/todos'
export const API_NOTES = API_ENDPOINT + '/notes'

export const API_HEADER = { 'Accept': 'application/json', 'Content-Type': 'application/json' }

/** GLOBAL VARIABLES **/
export const __DEBUG = true
export const __ENV = 'dev'
