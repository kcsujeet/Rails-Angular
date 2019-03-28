class CategoriesController < ApplicationController
    before_action :set_category, only: [:show]

    # GET /categories "all advertisements in the category"
    def index
        @categories = Category.all
        @categories= @categories.sort_by(&:name)
        render json: @categories
    end
    #GET /categories/:id
    def show
        @category_ads = @category.advertisement.all
        render json: @category_ads
    end

    private
    def set_category
        @category = Category.find(params[:id])
    end

end