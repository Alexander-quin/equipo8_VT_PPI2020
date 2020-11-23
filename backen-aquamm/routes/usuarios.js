  
const { Router } = require("express")
const router = Router()
const {pool} = require('../db/mysql_pool')
    
router.get("/usuarios", (req, res) => {
    pool.query('SELECT * FROM USUARIO',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.post("/usuarios", (req, res)=> {
  let {
    NOMBRE,
    EMAIL
  }=req.body
  res.json({
    ID_USUARIO: 2,
    NOMBRE: NOMBRE,
    EMAIL: EMAIL

  })
})

router.put("/usuarios/:id", (req, res) => {
    let {
    NOMBRE,
    EMAIL
  }=req.body
  res.json({
    ID_USUARIO: 2,
    NOMBRE: NOMBRE,
    EMAIL: EMAIL

  })
})

router.get("/usuarios/:id", (req, res) => {
    res.json({
    ID_USUARIO: 2,
    NOMBRE: NOMBRE,
    EMAIL: EMAIL
  })
})
module.exports = router
