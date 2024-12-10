db.createCollection("playlist", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "playlist",
      "required": ["name", "created_at", "status", "created_by", "videos"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "created_at": {
          "bsonType": "date"
        },
        "status": {
          "enum": ["public", "private"]
        },
        "created_by": {
          "bsonType": "objectId"
        },
        "videos": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
