
module.exports = function(app){

  const dadosSchema = new app.mongoose.Schema({
      ocorrencia: { type: Date },
      temperatura: { type: Number },
      umidade: { type: Number },
      pressao: { type: Number}
  }) ;

  return app.database.dbDadosClimaticos.model('Dados', dadosSchema);

}