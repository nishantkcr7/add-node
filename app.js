const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express();

const staticPath = path.join(__dirname, 'public');
const partialsPath = path.join(__dirname, 'views/partials');

app.use(express.static(staticPath));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
// app.get('', (req,res)=>{
//     res.send('Hello From Express');
// });

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Addition Application',
        admin: 'Nishant Kumar'
    })
    console.log(req.query);
})

app.get('*', (req, res)=>{
    res.render('404',{
        error:'404! Page Not Found'
    })
})

app.listen(3000, ()=>{
    console.log("Server active at port 3000");
});