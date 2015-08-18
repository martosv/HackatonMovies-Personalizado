class QuestionsController < ApplicationController
	def index
		@questions = Question.all
		@question = @questions[0]
		@random_movies = Question.random_movies(@question.criterion)
		@question_movie = Question.take_a_movie(@random_movies)
		@games = Game.all
		@game = @games[0]
	end

	def show
		@questions = Question.all
		@question = @questions[0]
		@random_movies = Question.random_movies(@question.criterion)
		@question_movie = Question.take_a_movie(@random_movies)
		@games = Game.all
		@game = @games[0]
	end


    def update
        @question = Question.find(params[:id])
        @question.update(question_params)
        redirect_to question_path(@question) #laptop_path es el metodo show al fin y al cabo
    end

     private # para aceptar solo los parametros que nos interesa o se quiere controlar
    def question_params
        params.require(:question).permit(:criterion, :year)
    end
end
