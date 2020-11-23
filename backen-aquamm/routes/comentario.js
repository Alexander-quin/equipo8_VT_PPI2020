const { Router } = require("express")
const { pool } = require("./../db/mysql_pool")
const router = Router()

router.get("/comentarios", (req,res) => {
  try{
    pool.query("SELECT * FROM comentario", (errors, results, fields) => {
      if(errors){
        res.status(502).json({mensaje : "Se presento un error ejecutando la consulta.", errores : errors})
      }else{
        res.status(200).json(results)
      }
    })
  }catch(error){
    res.status(500).json({mensaje : "Se presento un error en el servidor."})
  }
})

router.get("/comentario/:id", (req,res) => {
  try{ 
    const id = req.params.id
    const SQL = "SELECT * FROM comentario WHERE id = ?"
    pool.query(SQL, [id], (errors, results, fields) => {
      if(errors){
        res.status(502).json({mensaje : "Se presento un error ejecutando la consulta.", errores : errors})
      }else{
        if(results[0] !== undefined)
          res.status(200).json(results[0])
        else
           res.status(200).json({}) 
      }
    })
  }catch(error){
    res.status(500).json({mensaje : "Se presento un error en el servidor."})
  }
})

router.put("/comentario/:id", (req,res) => {
  try{
    }catch(error){
    res.status(500).json({mensaje : "Se presento un error en el servidor."})
  }
})

router.post("/comentario", (req,res) => {
    try{
    const {
      nya,
      email,
      fecha_nacimiento,
      comentario,
    } = req.body
    let data = [email,comentario,nya,fecha_nacimiento]
      const SQL = `INSERT INTO comentario(correo,comentario,nombre,fecha_nacimiento) VALUES(?,?,?,?)`
      pool.query(SQL, data, (error, result, fields)=>{
        if(error){
          console.log(error)
          res.status(500).json({mensaje : "se presento un error en el servidor durante la creacion del comentario",insrto : false})
        }else{
          console.log(result)
          res.status(200).json({mensaje : "el comentarios se inserto correctamente", comentario : data, inserto : true})
        }
      })
  }catch(error){
    console.log(error)
    res.status(500).json({mensaje : "se presento un error en el servidor "})

  }
})

router.delete("/comentario/:id", (req,res) => {})

module.exports = router