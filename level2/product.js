db.createCollection("product", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "product",
      "required": ["name", "description", "image_url", "price", "type"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "image_url": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "type": {
          "enum": ["pizza", "hamburger", "drink"]
        },
        "category": {
          "bsonType": "string",
          "description":"Pizza only"
        }
      }  
    } 
  }
});
