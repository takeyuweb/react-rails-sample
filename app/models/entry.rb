class Entry < ActiveRecord::Base
  has_many :placements, ->{ includes(:category) }, dependent: :destroy
  has_many :categories, through: :placements
  has_one :category, ->{ where(primary: true) }, through: :placements
  accepts_nested_attributes_for :placements, allow_destroy: true
  before_validation :set_primary
  validates :title, presence: true

  private
  def set_primary
    primary_placements = placements.select{ |placement| placement.primary? }

    if primary_placements.empty? && placements.length > 0
      placements[0].primary = true
    else
      primary_placements.slice(1, primary_placements.length).each do |placement|
        placement.primary = false
      end
    end
    true
  end
end
