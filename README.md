**Express Generator**
https://expressjs.com/en/starter/generator.html

**Install Express**
`npm install express-generator -g`
`express myapp`

**Add port**
`app.listen(3001, () => console.log('Example app listening on port 3001!'))`


**Sequelize URL**
http://docs.sequelizejs.com/manual/tutorial/migrations.html

**Install sequelize and sequelize-cli**
`npm install --save sequelize sequelize-cli`

**Create Alias ?**
`alias sequelize='node_modules/.bin/sequelize'`

**Init Sequelieze**
`sequelize init`

**Create Database**
`sequelize db:create nameOfDatabase`

**Create Model**
`sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`

**Migrate**
`sequelize db:migrate`