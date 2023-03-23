const { Dogs, Temperaments } = require('../db')
const { Op } = require('sequelize')
const Formatter = require('../helpers/Formatter')
const {API_KEY} = process.env
const axios = require('axios')

// TODO modificar el objeto que devuelven las peticiones
/**
  Formato de los objetos
  - ID
  - Name
  - image
  - life_span
  - weight
  - height
 */

const formmatter = new Formatter()

//traer todos los dogs
const getDogApi = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    //const data = await response.json()
    formmatter.setAPI(response.data)
    return formmatter.dataFormatterApi()
  } catch (error) {
    throw new Error(error)
  }
}

const getDogBD = async () => {
  try {
    const dogResponse = await Dogs.findAll({
      include: Temperaments
    })
    formmatter.setDB(dogResponse)
    return formmatter.dataFormatterDB()
  } catch (error) {
    throw new Error(error)
  }
}

//Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido 
const getDogByNameAPI = async (name) => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    const dogs = await response.json()
    const filteredDogs = dogs.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase())
    })
    formmatter.setAPI(filteredDogs)
    return formmatter.dataFormatterApi()
  } catch (error) {
    throw new Error(error)
  }
}

const getDogByNameBD = async (nameDog) => {
  try {
    const response = await Dogs.findAll({
      where: {
        name: {
          [Op.iRegexp]: nameDog
        }
      },
      include: Temperaments
    })
    formmatter.setDB(response)
    return formmatter.dataFormatterDB()
  } catch (error) {
    throw new Error(error)
  }
}

//buscar el dogs por su id
const getDogByIdAPI = async (id) => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    const data = await response.json()
    const dog = data.find((item) => item.id === parseInt(id))
    formmatter.setAPI([dog])
    let detal = formmatter.dataFormatterApi()
    let detal2 = detal.pop()
    return detal2
  } catch (error) {
    throw new Error(error)
  }
}

const getDogByIdBD = async (id) => {
  try {
    const data = await Dogs.findAll({
      where: {
        id
      },
      include: Temperaments
    })
    formmatter.setDB(data)
    let detal = formmatter.dataFormatterDB()
    let detal2 = detal.pop()
    return detal2
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getDogApi,
  getDogBD,
  getDogByNameAPI,
  getDogByNameBD,
  getDogByIdAPI,
  getDogByIdBD
}
