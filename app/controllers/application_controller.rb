class ApplicationController < ActionController::API
  include ::ActionController::Cookies

  def not_found
    render json: { error: "not_found" }
  end

  def signed_in?
    if cookies.signed[:jwt]
      return true
    else
      return false
    end
  end

  def authorize_request
    encoded_jwt = cookies.signed[:jwt]
    begin
      @decoded = JsonWebToken.decode(encoded_jwt)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
