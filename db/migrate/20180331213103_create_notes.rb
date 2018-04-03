class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :text
      t.boolean :is_url, default: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
