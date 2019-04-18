class SubcategoriesController < ApplicationController
  before_action :set_subcategory, except: [:index, :all]

  #get all subcategories
  def all
    @subcategories = Subcategory.all
    render json:@subcategories
  end

  # GET categories/{category: id}/subcategories
  def index
    @subcategories = Category.find(params[:category_id]).subcategories.all
    render json: @subcategories
  end

  # GET categories/{category: id}/subcategories/{subcategory: id}
  def show
    @subcategory_advertisements = @subcategory.advertisements.all
    render json: @subcategory_advertisements
  end

  private

  def set_subcategory
    @subcategory = Category.find(params[:category_id]).subcategories.find(params[:id])
end
end
