interface Field {
  [key: string]: boolean,
}

interface PreparedUser {
  [key: string]: string,
}

interface User {
  "gender": string,
  "name": {
      "title": string,
      "first": string,
      "last": string
  },
  "location": {
    "street": {
      "number"?: number,
      "name": string
    },
    "city": string,
    "state"?: string,
    "country"?: string,
    "postcode"?: number,
    "coordinates"?: {
      "latitude": string,
      "longitude": string
    },
    "timezone": {
      "offset": string,
      "description": string
    }
  },
  "email": string,
  "phone": string,
  "picture": {
    "large": string,
    "medium": string,
    "thumbnail": string
  }
}

interface Info {
  "info": {
    "seed": string,
    "results": number,
    "page": number,
    "version": string
  }
}

type ServerResponce = {
  results: User[],
  info: Info
}

interface Fields {
  [key: string]: boolean,
}
