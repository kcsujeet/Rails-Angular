class RemoveCategoryFromAdvertisement < ActiveRecord::Migration[5.2]
  def change
    remove_reference :advertisements, :category, foreign_key: true
  end
end
