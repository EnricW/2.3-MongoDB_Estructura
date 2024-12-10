db.createCollection("user", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "user",
      "required": ["email", "password", "username", "birth_date", "gender", "country", "postal_code"],
      "properties": {
        "email": {
          "bsonType": "string"
        },
        "password": {
          "bsonType": "string"
        },
        "username": {
          "bsonType": "string"
        },
        "birth_date": {
          "bsonType": "date"
        },
        "gender": {
          "enum": ["male","female"]
        },
        "country": {
          "bsonType": "string"
        },
        "postal_code": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
