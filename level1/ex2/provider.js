db.createCollection("provider", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "provider",
      "required": ["name", "street_address", "phone_number", "email", "city", "country"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "street_address": {
          "bsonType": "string"
        },
        "phone_number": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "city": {
          "bsonType": "string"
        },
        "country": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
