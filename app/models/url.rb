require 'securerandom'
require_relative '../../config/database'
require_relative '../../config/environment'

class Url < ActiveRecord::Base
  # Remember to create a migration!
  before_create :shortener
  validates :url, presence: true, format: {with: URI.regexp}
  validates :url, uniqueness: true

  def shortener
    self.xxx = SecureRandom.hex(3)
  end
end
