class Category < ApplicationRecord
    has_many :subcategories, dependent: :destroy
    has_many :advertisements, through: :subcategories
end
