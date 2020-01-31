class EventsController < ApplicationController
  def index
    @events = Event.all
    render json: @events, include: 'issues'
  end

  def create
    @event = Event.create(event_params)
    render json: @event
  end

  def show
    @event = Event.find(params[:id])
    render json: @event, include: 'issues'
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    render json: @event
  end

  def destroy
    @event = Event.find(params[:id])
    Issue.where(event_id: @event.id).each do |issue|
      issue.delete
    end
    
    @event.delete
    @events = Event.all

    # render json: {eventID: @event.id}
    render json: @events, include: 'issues'
    # redirect_to events_path
  end

  private
  def event_params
    params.require(:event).permit(:title, :date, :description, :id)
  end
end
