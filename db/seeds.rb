# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Car.destroy_all

demo_user_1 = User.create(first_name:"Launch", last_name:"Hack", email:"matt@carvoyant.com", password:"abcd1234", password_confirmation:"abcd1234", id:197)