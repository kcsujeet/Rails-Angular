class CreateAdvertisements < ActiveRecord::Migration[5.2]
  def change
    create_table :advertisements do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :category
      t.integer :used_for
      t.boolean :price_negotiable
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
