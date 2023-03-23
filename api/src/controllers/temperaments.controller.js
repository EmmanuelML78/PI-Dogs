const { Temperaments } = require('../db')
const {API_KEY} = process.env
const axios = require('axios')

const getAllTemperaments = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    const data = await response.json()

    /* allTemperaments sera un array de arrays por ejemplo: [[1, 2], [3, 4], [5,6]]
    uso el metodo .flat() para aplanar el array, quedaria: [1, 2, 3, 4, 5, 6]
    */

    const allTemperaments = data.map((item) => item.temperament?.split(', ')).flat()

    // Ahora queda eliminar todas las ocurrencias

    const cleanOcurrences = new Set(allTemperaments)

    cleanOcurrences.forEach(async (item) => {
      if (item) {
        await Temperaments.findOrCreate({
          where: { name: item }
        })
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = getAllTemperaments
