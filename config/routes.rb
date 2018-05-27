Rails.application.routes.draw do
  root to: 'notes#index'
  resources :notes, only: [:index, :create, :update, :destroy]

  get '*path', to: 'notes#index'
end
