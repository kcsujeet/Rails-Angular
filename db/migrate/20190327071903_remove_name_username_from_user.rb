class RemoveNameUsernameFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name, :string
    remove_column :users, :username, :string
  end
end
