// Database conection
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/onenode');

// Helpers
var expect = require("chai").expect;

// Model to test
var Client = require("../models/client.js");

// Mocka Unit test
describe('client model tests: ', function() {

	// clean up the whole table
	// beforeEach(function(iamdone){
	// 	Client.remove(iamdone);
	// });

	afterEach(function(iamdone){
		Client.remove(iamdone);
	});

	it('testing: Should save a new client\n', function(iamdone) {

		Client.create({
			username: "amoreno2",
			full_name: "Alejandro Moreno",
		}, function(error, client) {
			expect(error).to.not.exist;
			expect(client).to.exist;
			expect(client._id).to.exist;
			expect(client.username).to.equal('amoreno2');
			expect(client.full_name).to.equal('Alejandro Moreno');
			iamdone();
		});
	});

	it('testing: Should require username\n', function(iamdone) {
		Client.create({
			full_name: "Alejandro Moreno",
		}, function(error, client) {
			expect(error).to.exist;
			expect(String(error)).to.match(/is required/);
			iamdone();
		});
	});
});