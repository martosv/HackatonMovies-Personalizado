class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|

    	t.integer :score
    	t.integer :max_score
    	
      t.timestamps null: false
    end
  end
end
