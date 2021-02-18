class Business < ApplicationRecord
   belongs_to :user

  # UNCOMMENT when creating these tables

   # has_many :bookings, dependent: :destroy
   # has_many :reviews, dependent: :destroy
   has_many_attached :pictures

   validates :name, :description, :category, presence: true
end
