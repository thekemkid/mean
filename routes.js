module.exports = function(app){

	app.get('/', function(req, res){
		res.end('hello world');
	});

	app.get('/help', function(req, res){
		res.end('help')
	});
}