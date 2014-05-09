class UsersController < ApplicationController 

  def index
    users = User.all
  end

  def new
    @user = User.new(user_params)
  end

  def create
    @user = User.new
    if @user.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email
      )
  end
end