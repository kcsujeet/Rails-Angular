class AuthenticationController < ApplicationController
  before_action :authorize_request, except: [:login, :logged_in]

  #GET /auth/logged_in
  def logged_in
    render json: {logged_in: signed_in?}
  end

  def logout
    cookies.delete(:jwt)
    render json:{logged_out: !!cookies.signed{:jwt}}
  end

  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      cookies.signed[:jwt] = { value: token, httponly: true,expires: 5.day.from_now }
      if cookies.signed[:jwt]
        render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M") }, status: :ok
      else
        render json: {error: "Cookies not saved"}
      end

    else
      render json: { error: "unauthorized" }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
