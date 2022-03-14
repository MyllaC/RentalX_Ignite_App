# rentalx_Ignite_App

# Cadastro de carro

**RF**
Deve ser possível cadastrar um carro 

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador 

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema 

# Cadastro de Especificação do carro

**RF**
Deve ser possível cadastrar uma especificação para um carro


**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrodo
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro 
O usuário responsável pelo cadastro deve ser um usuário administrador 

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro 

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador 

# Aluguel do carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel casa já exista um aberto para o mesmo carro
O usuário deve estar logado na aplicação
Ao realizar um aluguel o status do carro deverá ser alterado para indisponível

# Devolição do carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
Caso o horário de devolução seja supereior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso
Caso haja multa, deverá ser somado ao total do aluguel
O usuário deve estar logado na aplicação

# Listagem de Alugueis para usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação