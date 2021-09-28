const Flight = require("../models/flight");

module.exports = {
	new: newFlight,
	create,
	index,
	show
}
 
function newFlight(req, res){
	res.render("flights/new",{
		title:"New Flight"
	})
}
function create(req, res){
	Flight.create(req.body,function(err,addedFlight){
		if(err){
			console.log(err)
			res.redirect("/flights/new")
		}
		console.log(addedFlight)
		res.redirect("/flights")
	})

}
function index(req,res){
	Flight.find({},function(err,flightArray){
		res.render("flights/index",{
			title: "Flights",
			flightArray
		})
	})
}
function show(req, res){
 Flight.findById(req.params.id,function(err,selectedFlight){
	 console.log(selectedFlight)
	 res.render("flights/show",{
		title:"Details",
		selectedFlight
	 })
 })
}