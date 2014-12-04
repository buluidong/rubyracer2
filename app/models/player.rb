class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :rounds
  has_many :games, through: :rounds
  validates :name, presence: true, uniqueness: true
end
