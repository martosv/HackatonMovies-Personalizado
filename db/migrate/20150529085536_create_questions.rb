class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
    	t.integer :year
    	t.string :criterion

      t.timestamps null: false
    end
  end
end
