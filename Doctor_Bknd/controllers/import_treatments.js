const fs = require("fs");
const fastcsv = require("fast-csv");
const mongodb = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017/";
let stream = fs.createReadStream("treatments_csv.csv");
let treament_record = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    treament_record.push({
        
        Appointment_id: data[0],
        Patient_id: data[1],
        Doctor_id: data[2],
        Treatment_prescription: data[3],
        Illness: data[4],
        Notes: data[5],
     
    });
  })
  .on("end", function() {
    
    treament_record.shift();
    console.log(treament_record);
    
    mongodb.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;
  
          client
            .db("Doctordetails")
            .collection("Treatments")
            .insertMany(treament_record, (err, res) => {
              if (err) throw err;
  
              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
    );

  });

stream.pipe(csvStream);