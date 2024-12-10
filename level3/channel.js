db.createCollection("channel", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "channel",
      "required": ["name", "description", "created_at", "created_by"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "created_at": {
          "bsonType": "date"
        },
        "created_by": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
