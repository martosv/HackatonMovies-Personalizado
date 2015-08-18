Rails.application.routes.draw do
  get '/' => 'questions#index'
  resources :questions do 
  	resources :games
  end
end
