Rails.application.routes.draw do
  root to: 'notes#index'
  resources :notes, only: [:index, :create, :update, :destroy]

  namespace :authentication, path: '' do
    post :signup
  end

  get '*path', to: 'notes#index'
end
