class CreateSubcategories < ActiveRecord::Migration[5.2]
  def change
    create_table :subcategories do |t|
      t.references :category, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
