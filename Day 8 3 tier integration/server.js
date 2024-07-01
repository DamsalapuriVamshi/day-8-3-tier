let mongoose = require("mongoose");

let express = require("express");

let cors = require("cors");



let app = express();
app.use(cors());

app.get("/getzx6Rs",async (req,res)=>{

    let zx6RArr = await zx6R.find();

    res.json(zx6RArr);
    
});

app.listen(2621,()=>{
    console.log('listening to port 2621')
})

let bikeSchema = new mongoose.Schema({

    name:String,
    model:String,
    price:String,
    type:String,
    displacement:String,
    ignition:String,
    starting:String,
    transmission:String,
    maximumPower:String,
    maximumTorque:String,
    wheelBase:String,
    groundClearance:String,
    seatHeight:String,
    curbMass:String,
    feulCapacity:String,
    brakeRear:String,
    caliperRear:String,
});

let zx6R = new mongoose.model('bikes',bikeSchema);

let insertDataIntoMDB = async ()=>{

try{
    let model = new zx6R ({
    name:"ZX6R",
    model:"BS6",
    price:"11,20,000",
    type:"Liquid-cooled, 4-stroke In-Line Four",
    displacement:"636 cm3",
    ignition:"Digital",
    starting:"Electric",
    transmission:"6-speed, return",
    maximumPower:"91.0 kW {124 PS} / 13,000 min-1",
    maximumTorque:"69.0 N·m {7.0 kgƒ·m} / 11,000 min-1",
    wheelBase:"1,400 mm",
    groundClearance:"130 mm",
    seatHeight:"830 mm",
    curbMass:"198 kg ",
    feulCapacity:"17 litres",
    brakeRear:"	Single ø220 mm disc",
    caliperRear:"Single-bore pin-slide",

    });

    let model2 = new zx6R ({
    name:"ZX10R",
    model:"BS6",
    price:"16,79,000",
    type:"Liquid-cooled, 4-stroke In-Line Four",
    displacement:"983 cm3",
    ignition:"Digital",
    starting:"Electric",
    transmission:"6-speed, return",
    maximumPower:"149.3 kW {203 PS} / 13,200 rpm",
    maximumTorque:"	114.9 N·m {11.7 kgƒ·m} / 11,400 rpm",
    wheelBase:"1,450 mm",
    groundClearance:"135 mm",
    seatHeight:"835 mm",
    curbMass:"207 kg ",
    feulCapacity:"17 litres",
    brakeRear:"	Single ø220 mm disc",
    caliperRear:"Single-bore pin-slide",
    });

    

    await model.save();
    await model2.save();

    console.log('Successfully inserted data into database');

    

}catch(err){
console.log('unable to insert data into database')
}

   
}

// let getDataFromDB = async ()=>{
//     let zx6RArr = await zx6R.find();
//     console.log(zx6RArr)

// }

let connectToMDB = async ()=>{

    try{
        await mongoose.connect("mongodb+srv://vamshid:vamshid@mongodb1.y2jzkik.mongodb.net/?retryWrites=true&w=majority&appName=mongodb1");

        console.log('Successfully connected to MDB');
        // insertDataIntoMDB();
       
    }catch(err){
console.log('unable to connect to MDB');
    }
    
}

connectToMDB();