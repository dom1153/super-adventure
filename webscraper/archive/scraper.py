from bs4 import BeautifulSoup
import requests

def test_scraper():
    # Test URL
    url = "https://example.com"
    
    # Make a request to the website
    response = requests.get(url)
    
    # Create BeautifulSoup object
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Print the title of the webpage
    print("Website Title:", soup.title.string)
    
    # Print the first paragraph
    first_paragraph = soup.p.text
    print("First paragraph:", first_paragraph)

def al_scraper():
    # URL for the event page
    url = 'https://azurlane.koumakan.jp/wiki/Dangerous_Inventions_Incoming!'
    
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all shop items
    shop_items = soup.find_all('div', class_='item-frame')
    
    # Extract and print details for each item
    for item in shop_items:
        stock = item.find('div', class_='item-stock').text.strip()
        name = item.find('div', class_='item-name').text.strip()
        price = item.find('div', class_='item-price').text.strip()
        print(f"Item: {name}")
        print(f"Stock: {stock}")
        print(f"Price: {price}")
        image_url = item.find('div', class_='item-image-frame').find('img')['src']
        if not image_url.startswith('http'):
            image_url = 'https://azurlane.koumakan.jp' + image_url
        print(f"Image URL: {image_url}")
        print("---")

    # event_shop = soup.find(id='Event_Shop')
    # print("Event Shop section:", event_shop.text)
    
    # div class="nomobile shop-character"
    # div class="shop-items"
    #   div class="item-frame"
    #      "item-stock" "item-image-frame" "item-name" "item-price"

if __name__ == "__main__":
    # test_scraper() 
    al_scraper()
