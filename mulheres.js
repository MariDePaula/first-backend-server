    
    const express = require('express')
    const router = express.Router()
    const app = express()
    const porta =  3333

    const mulheres = [
        {
            nome: 'Pamela teste 1',
            imagem: 'https://github.com/simaraconceicao.png',
            minibio: 'Dev junior'

        },
        {
            nome: 'Pamela teste 2',
            imagem: ' ',
            minibio: 'Dev pleno'

        },
        {
            nome: 'Pamela teste 3',
            imagem: ' ',
            minibio: 'Dev senior'

        }
    ]

    function mostrarMulheres(request, response){
          response.json(mulheres)
      
    }

     function mostraPorta(){
        console.log("Servidor criado e rodando na porta:", porta );
     }
     
app.use(router.get('/mulheres', mostrarMulheres))
app.listen(porta, mostraPorta)