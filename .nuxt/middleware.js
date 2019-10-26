const middleware = {}

middleware['getUserData'] = require('..\\middleware\\getUserData.js')
middleware['getUserData'] = middleware['getUserData'].default || middleware['getUserData']

export default middleware
