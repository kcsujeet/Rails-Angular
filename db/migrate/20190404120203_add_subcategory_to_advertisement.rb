class AddSubcategoryToAdvertisement < ActiveRecord::Migration[5.2]
  def change
    add_column :advertisements, :sub_category, :string
  end
end
