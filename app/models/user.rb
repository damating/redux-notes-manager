class User < ApplicationRecord
  has_many :notes

  validates :email, uniqueness: true
end
