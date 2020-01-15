class CreateIssue < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :title
      t.references :event, foreign_key: true
    end
  end
end
