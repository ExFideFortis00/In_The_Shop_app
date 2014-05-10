class CarsController < ApplicationController
  def index
    @cars = current_user.cars
  end

  def new
    @car = Car.new
  end

  def create
    @car = Car.new(car_params)
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
    @car.update
    if @car.save
      redirect_to user_path(current_user)
    else
      render :new
    end
  end

  def delete
    car = Car.find(params[:id])
    car.destroy
    redirect_to user_path(current_user)
  end

  private

  def car_params
    params.require(:car).permit(
      :name,
      :make,
      :model,
      :year,
      :starting_milage,
      :image_url
      )
  end

end