require 'test_helper'

class AdvertisementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @advertisement = advertisements(:one)
  end

  test "should get index" do
    get advertisements_url, as: :json
    assert_response :success
  end

  test "should create advertisement" do
    assert_difference('Advertisement.count') do
      post advertisements_url, params: { advertisement: { category: @advertisement.category, description: @advertisement.description, price: @advertisement.price, price_negotiable: @advertisement.price_negotiable, title: @advertisement.title, used_for: @advertisement.used_for, user_id: @advertisement.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show advertisement" do
    get advertisement_url(@advertisement), as: :json
    assert_response :success
  end

  test "should update advertisement" do
    patch advertisement_url(@advertisement), params: { advertisement: { category: @advertisement.category, description: @advertisement.description, price: @advertisement.price, price_negotiable: @advertisement.price_negotiable, title: @advertisement.title, used_for: @advertisement.used_for, user_id: @advertisement.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy advertisement" do
    assert_difference('Advertisement.count', -1) do
      delete advertisement_url(@advertisement), as: :json
    end

    assert_response 204
  end
end
