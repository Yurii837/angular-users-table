export const fields: Fields = {
  index: true,
  picture: true,
  name: true,
  gender: true,
  location: false,
  email: false,
  login: false,
  dob: false,
  registered: false,
  phone: true,
  cell: false,
  id: false, 
  nat: false
}

export const defaultUser: User= {
  "gender": "Default",
  "name": {
      "title": "Default",
      "first": "Default",
      "last": "Default"
  },
  "location": {
      "street": {
          "number": 0,
          "name": "Default"
      },
      "city": "Default",
      "state": "Default",
      "country": "Default",
      "postcode": 0,
      "coordinates": {
          "latitude": "Default",
          "longitude": "Default"
      },
      "timezone": {
          "offset": "Default",
          "description": "Default"
      }
  },
  "email": "Default",
  "phone": "Default",
  "picture": {
      "large": "https://randomuser.me/api/portraits/men/56.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
  }
}
