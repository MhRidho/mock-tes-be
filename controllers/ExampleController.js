const books = require('../models/data')

class ExampleController {

  static async index(req, res) {
    return res.status(200).json({
      message: "Okay",
      data: {
        id: 1,
        name: "Example"
      }
    })
  }
 
  static async getAllBook(req, res) {
    return res.status(200).json({
      message: "Success",
      data: books
    })
  }
  
  static async getIdBook(req, res) {
    try {
      const {id} = req.params
      const filterData = books.filter(i => i.id === parseInt(id))
        if (filterData.length === 0) {
            return res.json({
                status: "failed",
                message: "Data Tidak Ditemukan",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Berhasil Menampilkan Data",
            data: filterData
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
  }
  
  static async getJenisBook(req, res) {
    try {
      const {jenis} = req.params
      const filterData = books.filter(i => i.type === jenis)
        if (filterData.length === 0) {
            return res.json({
                status: "failed",
                message: "Data Tidak Ditemukan",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Berhasil Menampilkan Data",
            data: filterData
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
  }
  
  static async editBook(req, res) {
    try {
        const idBooks = req.params.id
        const nameBook = req.body.name
        let dataBaru = []
        books.map((i) => {
            if (i.id !== parseInt(idBooks)) {
                dataBaru.push({
                    id: i.id,
                    name: i.name,
                    type: i.type
                })
            } else {
                dataBaru.push({
                    id: i.id,
                    name: nameBook,
                    type: i.type
                })
            }
        })
        if (dataBaru.length === 0) {
            return res.json({
                status: "failed",
                message: "Data Tidak Ditemukan",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Berhasil Mengubah Data",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
  }
  
  static async storeBook(req, res) {
    try {
        const idBooks = books.length + 1
        const nameBook = req.body.name
        const typeBook = req.body.type
        let dataBaru = books
        if (dataBaru.length === 0) {
            return res.json({
                status: "failed",
                message: "data tidak ditemukan",
                data: []
            })
        }
        dataBaru.push({
            id: idBooks,
            name: nameBook,
            type: typeBook
        })
        return res.json({
            status: "Success",
            message: "Berhasil Membuat Data",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
  }
  
  static async deleteBook(req, res) {
    try {
      const {id} = req.params
      let dataBaru = []
      books.map((i) => {
          if (i.id !== parseInt(id)) {
              dataBaru.push({
                  id: i.id,
                  name: i.name,
                  type: i.type
              })
          }
      })
      if (dataBaru.length === 0) {
          return res.json({
              status: "failed",
              message: "Data Tidak Ditemukan",
              data: []
          })
      }
      return res.json({
          status: "Success",
          message: "Berhasil Menghapus Data",
          data: dataBaru
      })
  } catch (error) {
      res.json({
          status: "failed",
          message: error,
          data: []
      })
  }
  }

}

module.exports = ExampleController;