# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "a@example.com", password: ENV['A_USER_PASS'],password_confirmation: ENV['A_USER_PASS'])
User.create(email: "b@example.com", password: ENV['B_USER_PASS'],password_confirmation: ENV['B_USER_PASS'])

@o1 = Event.create(title: 'outing 1', date:'2020-01-14')
@o2 = Event.create(title: 'outing 2', date:'2020-02-29')

@i1 = Issue.new(title: 'outing 1 issue title', event_id: @o1.id)
@i2 = Issue.new(title: 'outing 2 issue title', event_id: @o2.id)