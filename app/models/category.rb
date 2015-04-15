class Category < ActiveRecord::Base
  has_many :placements, dependent: :destroy
  has_many :entries, through: :placements
end
