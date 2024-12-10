db.createCollection("comment", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "comment",
      "required": ["text", "created_at", "created_by", "video"],
      "properties": {
        "text": {
          "bsonType": "string"
        },
        "created_at": {
          "bsonType": "date"
        },
        "created_by": {
          "bsonType": "objectId"
        },
        "video": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
