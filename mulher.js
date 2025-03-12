    
    const express = require('express')
    const router = express.Router()

    const app = express()
    const porta =  3333

        function mostrarMulher(require, response){
            response.json({
                nome: 'Alina Melo',
                imagem: 'https://github.com/simaraconceicao.png',
                minibio: 'Gerente da gente'
            })

        }

     function mostraPorta(){
        console.log("Servidor criado e rodando na porta:", porta );
     }


app.use(router.get('/mulher', mostrarMulher))
app.listen(porta, mostraPorta)