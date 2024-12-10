db.createCollection("video", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "video",
      "required": ["title", "description", "size", "file_name", "duration", "thumbnail", "views", "likes", "dislikes", "status", "tags", "uploaded_by", "uploaded_at", "likes_log", "dislikes_log"],
      "properties": {
        "title": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "size": {
          "bsonType": "decimal"
        },
        "file_name": {
          "bsonType": "string"
        },
        "duration": {
          "bsonType": "int"
        },
        "thumbnail": {
          "bsonType": "string"
        },
        "views": {
          "bsonType": "int"
        },
        "likes": {
          "bsonType": "int"
        },
        "dislikes": {
          "bsonType": "int"
        },
        "status": {
          "enum": ["public", "hidden", "private"]
        },
        "tags": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "uploaded_by": {
          "bsonType": "objectId"
        },
        "uploaded_at": {
          "bsonType": "date"
        },
        "likes_log": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "action_date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "action_date": {
                "bsonType": "date"
              }
            }
          }  
        },
        "dislikes_log": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "action_date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "action_date": {
                "bsonType": "date"
              }
            }
          }  
        }
      }  
    } 
  }
});
