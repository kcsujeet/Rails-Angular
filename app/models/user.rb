class User < ApplicationRecord
  has_secure_password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
  validates :password,length: { minimum: 6 },if: -> { new_record? || !password.nil? }, presence: true
  has_many :todo, dependent: :destroy
  has_many :advertisements, dependent: :destroy
end
