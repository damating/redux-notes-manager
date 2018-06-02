class User < ApplicationRecord
  has_many :notes

  has_secure_password

  validates :email, uniqueness: true, presence: true
end
