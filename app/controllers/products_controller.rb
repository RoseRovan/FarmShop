class ProductsController < ApplicationController
        def index
            products = Product.all
            render json: products
        end
        def create
            product = Product.create(product_params)
            render json: product, status: :created
            rescue ActiveRecord::RecordInvalid => invalid
            render json: { error: invalid.record.errors.full_messages}
        end
        def update
            product = Product.find_by(id: params[:id])
            if product
                product.update(product_params)
                render json: product, status: :accepted
            else
                render json: { error: "Farm product not found"}, status: :not_found
            end
        end
        def destroy
            product = Product.find_by(id: params[:id])
            if product
                product.destroy
                render json: {}, status: 420
            else
                render json: { error: "Farm product not found"}, status: :not_found
            end
        end
    
        private
    
        def product_params
            params.permit(:title, :image, :description, :note, :rating)
    
        end
    end