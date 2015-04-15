class CreatePlacements < ActiveRecord::Migration
  def change
    create_table :placements do |t|
      t.references :entry, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.boolean :primary, default: false

      t.timestamps null: false
    end
  end
end
