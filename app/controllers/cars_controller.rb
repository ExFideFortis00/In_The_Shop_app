class CarsController < ApplicationController
  def index
    @cars = current_user.cars
  end

  def new
    @user = current_user
    @car = Car.new
    response = connected_vehicles = HTTParty.get('https://api.carvoyant.com/v1/api/vehicle/',:headers => { "Authorization" => "Bearer jqrqp8hkmwy4wxpdwjjrq5mn"})
    @connected_vehicles = response["vehicle"]

  end

  def create
    @user = User.find(params["car"]["user_id"].to_i)
    @car = Car.new(car_params)
    @user.cars << @car
    if @car.save
      redirect_to user_path(current_user)
    else
      render :new
    end
  end

  def edit
    @car = Car.find(params[:id])
  end

  def update
    @car = Car.find(params[:id])
    @car.update(car_params)
    if @car.save
      redirect_to user_path(current_user)
    else
      render :new
    end
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy
    redirect_to user_path(current_user)
  end

  private

  def car_params
    params.require(:car).permit(
      :user_id,
      :name,
      :make,
      :model,
      :year,
      :starting_milage,
      :image_url,
      :id
      )
  end

end