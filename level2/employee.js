db.createCollection("employee", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employee",
      "required": ["name", "last_name", "NIF", "phone_number", "role", "store"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "last_name": {
          "bsonType": "string"
        },
        "NIF": {
          "bsonType": "string"
        },
        "phone_number": {
          "bsonType": "string"
        },
        "role": {
          "enum": ["cook", "delivery"]
        },
        "store": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
