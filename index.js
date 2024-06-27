const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

app = express();
app.use(cors());
app.use(express.json());

app.post("/sem" , (req , res ) => {
	let data = [req.body.name , req.body.phone, req.body.query];

	let name = req.body.name ; 
	let txt = "Phone = " + req.body.phone + "Query = " + req.body.query ;
		
	let transporter = nodemailer.createTransport({
		service : "gmail" ,
		auth : {
			user : "sanskargawade85@gmail.com",
			pass : "ximvrqtjyyevwpxg"
				}
	})
	let mailOptions = {
		from : "sanskargawade85@gmail.com" ,
		to : "neetsbelgum@gmail.com",
		subject : "Enquiry from " + name,
		text : txt
		}
		transporter.sendMail(mailOptions, (err , info ) => {
		if (err) {
			console.log("Mail err " , err);
			res.status(500).json(err);
		}
		else {
				console.log("Mail send " , info.response);
				res.send(200).json("Mail send");
		}

	})
});

app.listen(9000 , ()=> { console.log("Ready to serve @ 9000"); });