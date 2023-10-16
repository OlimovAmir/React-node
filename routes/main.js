
module.exports = function(app){
    app.get('/', (reg, res)=>{
        res.end('main');
    })
}