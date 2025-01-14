db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "lens_left_prescription", "lens_right_prescription", "frame_type", "lens_left_color", "lens_right_color", "price", "provider", "bought_by"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "lens_left_prescription": {
          "bsonType": "string"
        },
        "lens_right_prescription": {
          "bsonType": "string"
        },
        "frame_type": {
          "enum": ["rimless", "acetate", "metal"]
        },
        "lens_left_color": {
          "bsonType": "string"
        },
        "lens_right_color": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "provider": {
          "bsonType": "object",
          "title": "object",
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
        },
        "bought_by": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["name", "street_address", "phone_number", "email", "registration_date"],
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
              "registration_date": {
                "bsonType": "date"
              }
            }
          }  
        }
      }  
    } 
  }
});
