class IssuesController < ApplicationController
  def index
    @issues = Issue.all
    render json: @issues
  end

  def create
    @event = Event.find_by(title: params[:event_title])
    @issue = Issue.create(title: params[:title], event_id: @event.id)
    render json: @issue
  end

  def show
    @issue = Issue.find(params[:id])
    render json: @issue
  end

  def update
    @issue = Issue.find(params[:id])
    @issue.update(issue_params)
    render json: @issue
  end

  def destroy
    @issue = Issue.find(params[:id])
    @issue.delete

    render json: {issueID: @issue.id}
  end

  private
  def issue_params
    params.require(:issue).permit(:title)
  end
end
