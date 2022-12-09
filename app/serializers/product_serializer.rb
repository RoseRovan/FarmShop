class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :note, :description, :image, :rating
end
