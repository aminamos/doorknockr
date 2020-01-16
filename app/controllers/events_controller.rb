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
    render json: @event
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    render json: @event
  end

  def destroy
    @event = Event.find(params[:id])
    @issue = Issue.find_by(event_id: @event.id)
    if @issue
      @issue.delete
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
