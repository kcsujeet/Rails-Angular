class TodosController < ApplicationController
  before_action :authorize_request
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  def index
    @todos = @current_user.todo.all

    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = @current_user.todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = @current_user.todo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def todo_params
      params.permit(:title, :description)
    end
end
