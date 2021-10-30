const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
require('./db/connect');
const SaveData = require('./models/crudinfo');
const static_path = path.join(__dirname, '../public');


app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));


app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'ejs');


// For reading data form mongo and showing it into table
// app.get('/', function(req, res) {
//     SaveData.find({}).exec(function(err, lists) {
//         if (err) {
//             throw err;
//         } else {
//             res.render('index.ejs', {
//                 data: lists.map(p => p.toJSON())
//             });
//         }
//     });
// });



// for getting value which has to be updated
app.get('/edit/:id', function(req, res) {
    SaveData.findById({ _id: req.params.id }).exec(function(err, update) {
        if (err) {
            throw err;
        } else {


            res.render('edit.ejs', {
                datas: update
            });

            console.log('updated is ' + update)
        }
    });
});




// adding data to server and saving it in mongodb
app.post('/', async(req, res) => {
    try {

        const name = req.body.sname;
        const age = req.body.sage;
        const city = req.body.scity;
        // console.log(name);
        // console.log(age);
        // console.log(city);
        const UserRecord = new SaveData({
            Name: name,
            Age: age,
            City: city
        });

        const Added = await UserRecord.save();

        res.redirect(req.get('referer'));

        // res.status(200).send('Sucessfully added');

    } catch (err) {
        res.send('Cannot find or error inserver' + err.message);
        console.log(err);
    }
})



//This below code is to update data
app.post('/update/:id', async(req, res) => {


    SaveData.findByIdAndUpdate({ _id: req.params.id }, {
        Name: req.body.sname,
        Age: req.body.sage,
        City: req.body.scity,
        new: true
    }, (err, result) => {
        if (err) {
            res.json({ message: err.message });
            console.log('not sucess')
        } else {
            res.redirect('/');

            console.log('sucess');
        }
        console.log(result);

    })
});




// This below code is for deleting the data
app.get('/delete/:id', async function(req, res) {

    try {

        const deleteData = await SaveData.findByIdAndDelete({ _id: req.params.id });
        console.log(deleteData);

        if (!deleteData) {
            // return res.status(404).send();
            // res.send('/delete')
            res.send('Cannot Delete');
            console.log("Cannot Delete");
        } else {
            res.redirect(req.get('referer'));
            // res.status(200).send(deleteData);
        }
    } catch (err) {
        console.log('Server Error delet');
    }
});



app.get('/', async(req, res) => {
    const page = req.query.page;
    // const page = 1;
    console.log(page);

    try {
        const limit = 5;
        const startpage = (Number(page) - 1) * limit;
        const total = await SaveData.countDocuments({});

        const filerec = await SaveData.find().sort({ _id: 1 }).limit(limit).skip(startpage);
        console.log(startpage)

        // console.log(total);
        // console.log(filerec);
        // res.send(filerc) 
        // const pgnum = (Math.ceil(total / limit))

        res.render('index.ejs', {
            data: filerec,
            currentpage: page,
            howmany: Math.ceil(total / limit)
        })

        // res.json({ data: filerec, currentpage: page, howmany: Math.ceil(total / limit) });


    } catch (err) {
        res.send('erron in pagination')
        console.log(err)
    }
})

app.get('/search', async(req, res) => {
    const searchValue = JSON.stringify(req.query.search);
    console.log(searchValue)
    try {
        const title = new RegExp(searchValue, 'i');
        const srchdata = await SaveData.find({ title: title })

        res.json({ datrec: srchdata })
        console.log(srchdata)
            // res.send(srchdata);
    } catch (err) {
        res.send(err.message);
    }

})




app.listen(port, () => {
    console.log(`Listenig To Port ${port}`);
});