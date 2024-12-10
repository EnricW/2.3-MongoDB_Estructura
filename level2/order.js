db.createCollection("order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order",
      "required": ["client", "products", "total_price", "date_time", "delivery_type", "employee", "store"],
      "properties": {
        "client": {
          "bsonType": "objectId"
        },
        "products": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["product_id", "quantity", "line_price"],
            "properties": {
              "product_id": {
                "bsonType": "objectId"
              },
              "quantity": {
                "bsonType": "int"
              },
              "line_price": {
                "bsonType": "decimal"
              }
            }
          }  
        },
        "total_price": {
          "bsonType": "decimal"
        },
        "date_time": {
          "bsonType": "date"
        },
        "delivery_type": {
          "enum": ["pickup", "delivery"]
        },
        "delivery_info": {
          "bsonType": "object",
          "title": "object",
          "required": ["street_address", "phone_number"],
          "properties": {
            "street_address": {
              "bsonType": "string"
            },
            "phone_number": {
              "bsonType": "string"
            },
            "note": {
              "bsonType": "string"
            }
          }      ,
          "description":"Delivery only"
        },
        "employee": {
          "bsonType": "objectId"
        },
        "store": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
