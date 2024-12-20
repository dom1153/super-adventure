"use client"

import { useEffect, useState } from "react"

interface ShopItem {
  name: string
  stock: string
  price: string
  image_url: string
}

interface EventData {
  dates: {
    en_server?: { start: string; end: string }
    all_server?: { start: string; end: string }
  }
  shop_items: ShopItem[]
  url: string
}

const ALShop: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/azur/events") // You'll need to create this API route
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      }
    }

    fetchEvents()
  }, [])

  const id = 7

  return (
    <div>
      <h1>Event Shops</h1>
      {events.length > 0 && (
        <div>
          <h2>Event: {events[id].url}</h2>
          {events[id].dates.all_server && (
            <p>
              Period: {events[id].dates.all_server.start} -{" "}
              {events[id].dates.all_server.end}
            </p>
          )}
          <div className="grid grid-cols-4 gap-4">
            {events[id].shop_items.map((item, itemIndex) => (
              <div key={itemIndex} className="border p-4">
                <img src={item.image_url} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Stock: {item.stock}</p>
                <p>Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {false &&
        events.map((event, index) => (
          <div key={index}>
            <h2>Event: {event.url}</h2>
            {event.dates.all_server && (
              <p>
                Period: {event.dates.all_server.start} -{" "}
                {event.dates.all_server.end}
              </p>
            )}
            <div className="grid grid-cols-4 gap-4">
              {event.shop_items.map((item, itemIndex) => (
                <div key={itemIndex} className="border p-4">
                  <img src={item.image_url} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Stock: {item.stock}</p>
                  <p>Price: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default ALShop
