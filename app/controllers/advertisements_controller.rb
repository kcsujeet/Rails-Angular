class AdvertisementsController < ApplicationController
  before_action :authorize_request
  before_action :set_advertisement, only: [:show, :update, :destroy]

  # GET /advertisements
  def index
    @advertisements = Advertisement.all

    render json: @advertisements
  end

  # GET /advertisements/1
  def show
    render json: @advertisement
  end

  # POST /advertisements
  def create
    @advertisement = @current_user.advertisement.new(advertisement_params)

    if @advertisement.save
      render json: @advertisement, status: :created, location: @advertisement
    else
      render json: @advertisement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /advertisements/1
  def update
    if @advertisement.update(advertisement_params)
      render json: @advertisement
    else
      render json: @advertisement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /advertisements/1
  def destroy
    @advertisement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_advertisement
      @advertisement = @current_user.advertisement.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def advertisement_params
      params.require(:advertisement).permit(:title, :description, :price, :category, :used_for, :price_negotiable, :category_id)
    end
end
