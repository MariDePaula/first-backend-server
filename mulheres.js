    
    const express = require('express')
    const router = express.Router()
    const app = express()
    const porta =  3333

    const mulheres = [
        {
            nome: 'Alina Melo',
            imagem: 'https://github.com/simaraconceicao.png',
            minibio: 'Gerente da gente'

        },
        {
            nome: 'Alina Melo 1',
            imagem: ' ',
            minibio: 'Gerente da gente 1'

        },
        {
            nome: 'Alina Melo 2',
            imagem: ' ',
            minibio: 'Gerente da gente 2'

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