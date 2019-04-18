# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Category.create!([
#   {name: 'Apparels and Accessories', icon_class: 'fas fa-socks'},
#   {name: 'AutoMobiles', icon_class: 'fas fa-car'},
#   {name: 'Computer and Peripherals', icon_class: 'fas fa-desktop'},
#   {name: 'Health and Services', icon_class: 'fas fa-heartbeat'},
#   {name: 'Mobile and Accessories', icon_class: 'fas fa-mobile-alt'},
#   {name: 'Real Estate', icon_class: 'fas fa-home'},
#   {name: 'Toys & Video Games', icon_class: 'fas fa-gamepad'},
# ])

# Subcategory.create!([
#   {name:'Men\'s Accessories', category_id:27},
#   {name:'Men\'s Clothing', category_id:27},
#   {name:'Men\'s Shoes', category_id:27},
#   {name:'Women\'s Accessories', category_id:27},
#   {name:'Women\'s Clothing', category_id:27},
#   {name:'Women\'s Shoes', category_id:27},
#   {name:'Sunglasses', category_id:27},
#   {name:'Watches', category_id:27},
# ])

Subcategory.create!([
  {name:'Desktop PCs', category_id: 29},
  {name:'Laptops', category_id: 29},
  {name:'Monitors', category_id: 29},
  {name:'Keyboards', category_id: 29},
  {name:'Mouses', category_id: 29},
  {name:'Printers and Scanner', category_id: 29},
])