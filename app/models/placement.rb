class Placement < ActiveRecord::Base
  belongs_to :entry
  belongs_to :category
end
