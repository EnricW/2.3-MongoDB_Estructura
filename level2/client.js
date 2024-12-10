db.createCollection("client", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "client",
      "required": ["name", "last_name", "street_address", "postal_code", "city", "province", "phone_number"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "last_name": {
          "bsonType": "string"
        },
        "street_address": {
          "bsonType": "string"
        },
        "postal_code": {
          "bsonType": "string"
        },
        "city": {
          "bsonType": "string"
        },
        "province": {
          "bsonType": "string"
        },
        "phone_number": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
