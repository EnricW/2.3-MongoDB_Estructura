db.createCollection("video", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "video",
      "required": ["title", "description", "size", "file_name", "duration", "thumbnail", "views", "likes", "dislikes", "status", "tags", "uploaded_by", "uploaded_at", "comments", "playlists", "likes_log", "dislikes_log"],
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
          "bsonType": "object",
          "title": "object",
          "required": ["email", "username", "birth_date", "gender", "country", "postal_code"],
          "properties": {
            "email": {
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
        },
        "uploaded_at": {
          "bsonType": "date"
        },
        "comments": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["text", "created_at", "created_by"],
            "properties": {
              "text": {
                "bsonType": "string"
              },
              "created_at": {
                "bsonType": "date"
              },
              "created_by": {
                "bsonType": "object",
                "title": "object",
                "required": ["email", "username", "birth_date", "gender", "country", "postal_code"],
                "properties": {
                  "email": {
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
          }  
        },
        "playlists": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["name", "created_at", "status", "created_by"],
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
                "bsonType": "object",
                "title": "object",
                "required": ["email", "username", "birth_date", "gender", "country", "postal_code"],
                "properties": {
                  "email": {
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
          }  
        },
        "likes_log": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user", "action_date"],
            "properties": {
              "user": {
                "bsonType": "object",
                "title": "object",
                "required": ["email", "username", "birth_date", "gender", "country", "postal_code"],
                "properties": {
                  "email": {
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
            "required": ["user"],
            "properties": {
              "user": {
                "bsonType": "object",
                "title": "object",
                "required": ["email", "username", "birth_date", "gender", "country", "postal_code"],
                "properties": {
                  "email": {
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
          }  
        }
      }  
    } 
  }
});
