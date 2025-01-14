db.createCollection("order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order",
      "required": ["client", "products", "total_price", "date_time", "delivery_type", "delivery_info", "employee", "store"],
      "properties": {
        "client": {
          "bsonType": "object",
          "title": "object",
          "required": ["name", "last_name", "street_address", "postal_code", "city", "province", "phone_number"],
          "properties": {
            "name": {
              "bsonType": "string"
            },
            "last_name": {
              "bsonType": "string"
            },
            "street_address": {
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
            },
            "phone_number": {
              "bsonType": "string"
            }
          }  
        },
        "products": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["product_id", "name", "description", "image_url", "price", "type", "category", "quantity", "line_price"],
            "properties": {
              "product_id": {
                "bsonType": "objectId"
              },
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
                "bsonType": "string"
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
          "bsonType": "timestamp"
        },
        "delivery_type": {
          "enum": ["pickup", "delivery"]
        },
        "delivery_info": {
          "bsonType": "object",
          "title": "object",
          "required": ["street_address", "phone_number", "note"],
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
          }  
        },
        "employee": {
          "bsonType": "object",
          "title": "object",
          "required": ["name", "last_name", "NIF", "phone_number", "role"],
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
            }
          }  
        },
        "store": {
          "bsonType": "object",
          "title": "object",
          "required": ["street_address", "postal_code", "city", "province"],
          "properties": {
            "street_address": {
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
    } 
  }
});
