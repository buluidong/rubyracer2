class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.string :url, :xxx
      t.integer :count
    end
  end
end
