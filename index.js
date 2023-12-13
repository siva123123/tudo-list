const { name } = require('ejs')
const express=require('express')
const path=require('path')
const port=8000
const app=express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded())
app.use(express.static('assests'))

var detaillist=[
    {
        name:"Lets Make a TUDO App",
        date:"2002-04-22",
        Catogry:"Personal"
    },
    {
        name:"annual repot submision",
        date: "2002-05-23",
        Catogry:"Personal"
    }
]

app.get('/',function(req,res){
    return res.render('home',{
        tittle:"siva",
        details:detaillist,
    })
})

app.post('/create-detail',function(req,res){
    detaillist.push({
        name:req.body.name,
        date:req.body.date,
        Catogry:req.body.Catogry
    })
    return res.redirect('/')
})
app.get('/delete',function(req,res){
    let index=detaillist.findIndex(list=>list.name===name &&list.date==date&&list.Catogry==Catogry)
    if(index!=-1){
        detaillist.splice(index,1)
    }
    return res.redirect('/')

})


app.listen(port,function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log(port)
})