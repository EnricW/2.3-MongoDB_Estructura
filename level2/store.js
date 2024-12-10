db.createCollection("store", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "store",
      "required": ["address", "postal_code", "city", "province"],
      "properties": {
        "address": {
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
        }
      }  
    } 
  }
});
