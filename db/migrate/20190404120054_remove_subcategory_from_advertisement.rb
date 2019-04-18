class RemoveSubcategoryFromAdvertisement < ActiveRecord::Migration[5.2]
  def change
    remove_column :advertisements, :subcategory, :string
  end
end
