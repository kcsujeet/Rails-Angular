class ProfilesController < ApplicationController
  before_action :authorize_request
  before_action :set_profile, only: [:show, :update,:index, :destroy]
  require 'json'

  include Rails.application.routes.url_helpers


  # GET /profiles/1
  def show
    render json: @profile
  end

  def index
    @profile = @profile.attributes.merge(profile_picture: rails_blob_url(@current_user.profile.profile_picture, disposition: "preview"))
    render json: @profile
  end

  # POST /profiles
  def create
    @profile = @current_user.create_profile(profile_params)
     @current_user.profile.profile_picture.attach( params[:profile_picture] )
    if @profile && @current_user.profile.profile_picture.attached?
      render json: {profile: @profile, profile_picture: rails_blob_path(@current_user.profile.profile_picture, disposition: "preview")}, status: :created, location: @profile
    else
      render json: @current_user.profile.profile_picture, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /profiles/1
  def update
    @profile = @current_user.update_profile(profile_params)
    @current_user.profile.profile_picture.attach( params[:profile_picture] )
    if @profile
      render json: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /profiles/1
  def destroy
    @profile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = @current_user.profile
    end

    # Only allow a trusted parameter "white list" through.
    def profile_params
      params[:profile] = JSON.parse(params[:profile])
      params.require(:profile).permit(:address, :phone_number)
    end
    
end
