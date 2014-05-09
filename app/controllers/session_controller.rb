class SessionController < ApplicationController
  def new
  end

  def create
    #1) Find a user by their email address and set that user = user
    user = User.find_by(email: params[:email])
    #2) if user and the user is able to authenticate by entering the correct password
    if user && user.authenticate(params[:password])
      #3)Set the user.id = to the session id
      session[:user_id] = user.id
      #4) redirect to root_path
      redirect_to user_path(session[:user_id])
    else
      #5)Else, rerender the page
      render :new
    end
  end

  def destroy
    #1)Set the session id = nil
    session[:user_id] = nil
    redirect_to root_path
  end
end