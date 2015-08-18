class Question < ActiveRecord::Base

	def self.random_movies(criterion)
        movies_array = Imdb::Search.new(criterion)
        movies = movies_array.movies
        number = 0
        selected_movies = []
        while(number < 5)
            random = rand(0..movies.size)
            if movies[random].poster != nil
                selected_movies << movies[random]
                number += 1
            end
        end
        return selected_movies
    end

	def self.take_a_movie(movies)
		random = rand(5)
		movies[random]
	end

end
