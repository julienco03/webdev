import requests

API_KEY = "c3af48521df8ac09b767f37686aa0eb4"


def get_data(location, forecast_days=None):
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={location}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    data = response.json()

    # The API provides the weather data for every 3rd hour
    # This gives you 8 weather data measurements for one day
    number_of_entries = forecast_days * 8

    filtered_data = data["list"][0:number_of_entries]
    return filtered_data


if __name__ == "__main__":
    print(get_data(location="Tokyo", forecast_days=3))
    print(get_data(location="Berlin", forecast_days=2))
