![logo](imagens/image.png)

- [Descrição do Projeto](#descrição-do-projeto)
- [Documentação da API](#documentação-da-api)

# Descrição do Projeto

O HeatWise é uma plataforma inovadora que utiliza o recurso de heat mapping para oferecer feedback de eficiência e medir o desempenho dos usuários dentro do site de uma empresa. Nosso objetivo é fornecer insights valiosos sobre áreas de alto interesse e interação, bem como identificar possíveis problemas de usabilidade que possam estar impactando a produtividade dos usuários.

## Funcionalidades Principais

- **Heat Mapping**: Identificação das áreas mais relevantes do site com base nos cliques e tempo de tela dos usuários.
- **Feedback de Eficiência**: Análise do desempenho dos usuários, fornecendo insights sobre suas ações, dificuldades e intenções.
- **Monitoramento Contínuo**: Acompanhamento em tempo real do comportamento dos usuários para detectar problemas e oportunidades de melhoria.
- **Relatórios Detalhados**: Geração de relatórios completos com dados analíticos e sugestões de otimização.
- **Integração Simples**: Instalação rápida e fácil do script fornecido por nós, sem necessidade de conhecimentos técnicos avançados.

## Como Funciona

1. **Cadastro do Site/Software**: A empresa cliente cadastra seu site e em nossa plataforma, fornecendo todas as informações relevantes.
2. **Instalação do Script**: A empresa instala o script fornecido por nós em seu site/software, utilizando uma tag similar à utilizada no Google Analytics.
3. **Monitoramento Iniciado**: O HeatWise começa a monitorar o comportamento dos usuários, coletando dados de interação.
4. **Análise e Feedback**: Nossa plataforma analisa os dados coletados e fornece feedback valioso sobre áreas de interesse, problemas de usabilidade e sugestões de melhorias.
5. **Otimização Contínua**: Com base nos insights fornecidos, a empresa pode implementar melhorias em seu site=, aumentando assim a eficiência e a produtividade dos usuários.

## Benefícios

- Identificação precisa de áreas de interesse e problemas de usabilidade.
- Aumento da eficiência e produtividade dos usuários.
- Otimização contínua do site para melhor experiência do usuário.
- Tomada de decisões embasada em dados concretos.
- Melhoria da satisfação do usuário e fidelização dos clientes.

## Tecnologias Utilizadas

- Linguagens de Programação: [Liste as linguagens utilizadas, por exemplo: JavaScript, Python, etc.]
- Ferramentas de Análise: [Liste as ferramentas de análise de dados utilizadas, por exemplo: Google Analytics, etc.]
- Plataformas de Desenvolvimento: [Liste as plataformas de desenvolvimento utilizadas, por exemplo: GitHub, etc.]

## Equipe

- [Breno Lems Santaigo] - RM: 552270
- [Felipe Guedes Gonçalves] - RM: 550906
- [Luiz Fellipe Soares de Sousa Lucena] - RM: 551365
- [Nina Rebello Francisco] - RM: 99509
- [Vitória Maria de Camargo] - RM: 552344

## Como Contribuir

Caso tenha interesse em contribuir com o desenvolvimento do HeatWise, sinta-se à vontade para abrir pull requests, reportar problemas ou sugerir melhorias em nosso repositório no GitHub.

## Licença

Este projeto está licenciado sob a [insira o tipo de licença aqui]. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

# Documentação da API

## Tarefas

- [-] [CRUD da Empresa](#crud-da-empresa)
- [-] [CRUD do Site](#crud-do-site)
- [ ] CRUD das Análises

## CRUD da Empresa

### Endpoint
- [Listar Todas as Empresas](#listar-todas-as-empresas)
- [Cadastrar Empresa](#cadastrar-empresa)
- [Detalhes da Empresa](#detalhes-da-empresa)
- [Apagar Empresa](#apagar-empresa)
- [Atualizar Empresa](#atualizar-empresa)

### Listar Todas as Empresas

`GET` /empresa

Retorna um array com todas as empresas cadastradas.

#### Exemplo de Resposta

```js
{
    "id": 1,
    "nome": "Carrefour",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados da empresas foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
---

### Cadastrar Empresa

`POST`  /empresa

Cria uma nova empresa com os dados enviados no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|nome|string|✅|Um nome curto para a empresa.|
|cnpj|string|✅|CNPJ da empresa|
|planoContratado|Long|✅|Plano escolhido pela empresa|
|telefone|string|✅|Telefone para contato da empresa|
|email|string|✅|Email para contato da empresa|
|sitesCadastrados|Array<Long>|❌|Sites cadastrados da empresa para análise|

```js
{
    "nome": "Carrefour",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "nome": "Carrefour",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|201|Empresa cadastrada com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
---

### Detalhes da Empresa

`GET` /empresa/`{id}`

Retorna os detalhes da empresa com o `id` informado com o parâmetro da path

#### Exemplo de Resposta

```js
// requisição para /empresa/1
{
    "id": 1,
    "nome": "Carrefour",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados ds empresa foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe empresa com o `id` informado|
---

### Apagar Empresa

`DELETE` /empresa/`{id}`

Apaga a empresa como o `id` especificado no parâmetro de path

|código|descrição|
|------|---------|
|204|Empresa foi apagada com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe empresa com o `id` informado|
---

### Atualizar Empresa

`PUT` /empresa/`{id}`

Altera os dados da empresa especificada no `id`, utilizando as informações enviadas no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|nome|string|✅|Um nome curto para a empresa.|
|cnpj|string|✅|CNPJ da empresa|
|planoContratado|Long|✅|Plano escolhido pela empresa|
|telefone|string|✅|Telefone para contato da empresa|
|email|string|✅|Email para contato da empresa|
|sitesCadastrados|Array<Long>|❌|Sites cadastrados da empresa para análise|

```js
{
    "nome": "CarrefourAlterado",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "nome": "CarrefourAlterado",
    "cnpj": "45.543.915/0001-81",
    "planoContratado": 1,
    "telefone": "0800-724-2822",
    "email": "carrefourrh@gmail.com",
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Empresa alterada com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe empresa com o `id` informado|
---

## CRUD do Site

### Endpoint
- [Listar Todos os Sites](#listar-todos-os-sites)
- [Cadastrar Site](#cadastrar-site)
- [Detalhes do Site](#detalhes-da-site)
- [Apagar Site](#apagar-site)
- [Atualizar Site](#atualizar-site)

### Listar Todas os Sites

`GET` /empresa/`{id}`/site

Retorna um array com todas os sites cadastradas.

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "empresaId": 1,
        "apelido": "Site de folha de pagamento",
        "url": "http://carrefourfolhapagamento.com.br",
        "analise": 1
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados do sites foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
---

### Cadastrar Site

`POST`  /empresa/`{id}`/site

Cria um novo site com os dados enviados no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|empresaId|Long|✅|Id da empresa que o site pertence|
|apelido|string|✅|Um nome curto para o site.|
|url|string|✅|Link para o site|
|analise|Long|❌|Sites cadastrados do site para análise|

```js
{
    "empresaId": 1,
    "apelido": "Site de folha de pagamento",
    "url": "http://carrefourfolhapagamento.com.br",
    "analise": ""
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "empresaId": 1,
    "apelido": "Site de folha de pagamento",
    "url": "http://carrefourfolhapagamento.com.br",
    "analise": ""
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|201|Site cadastrado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
---

### Detalhes da Site

`GET` /empresa/`{id}`/site/`{id}`

Retorna os detalhes da site com o `id` informado com o parâmetro da path

#### Exemplo de Resposta

```js
// requisição para /site/1
{
    "id": 1,
    "empresaId": 1,
    "apelido": "Site de folha de pagamento",
    "url": "http://carrefourfolhapagamento.com.br",
    "analise": 1
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados ds site foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe site com o `id` informado|
---

### Apagar Site

`DELETE` /empresa/`{id}`/site/`{id}`

Apaga a site como o `id` especificado no parâmetro de path

|código|descrição|
|------|---------|
|204|Site foi apagado com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe site com o `id` informado|
---

### Atualizar Site

`PUT` /empresa/`{id}`/site/`{id}`

Altera os dados da site especificada no `id`, utilizando as informações enviadas no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|empresaId|Long|✅|Id da empresa que o site pertence|
|apelido|string|✅|Um nome curto para o site.|
|url|string|✅|Link para o site|
|analise|Long|❌|Sites cadastrados do site para análise|

```js
{
    "empresaId": 1,
    "apelido": "Site de folha de pagamento alterado",
    "url": "http://carrefourfolhapagamento.com.br",
    "analise": 1
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "empresaId": 1,
    "apelido": "Site de folha de pagamento alterado",
    "url": "http://carrefourfolhapagamento.com.br",
    "analise": 1
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Site alterado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe site com o `id` informado|