class AuthenticationController < ApplicationController
  skip_before_action :verify_authenticity_token

  def signup
    user = User.find_by_email(user_params[:email])

    if user.present?
      render json: { error: 'Error is in use' }, status: 422
    else
      user = User.new(user_params)
      if user.save
        render json: { success: true }
      else
        render json: { error: 'Signing up failed' }, status: 422
      end
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
