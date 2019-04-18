class AddIconClassToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :icon_class, :string
  end
end
