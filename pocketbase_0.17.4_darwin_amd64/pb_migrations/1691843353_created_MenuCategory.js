/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lfj3p4x47lrt3f4",
    "created": "2023-08-12 12:29:13.104Z",
    "updated": "2023-08-12 12:29:13.104Z",
    "name": "MenuCategory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rxalbiig",
        "name": "Name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nzkekiyg",
        "name": "Description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lfj3p4x47lrt3f4");

  return dao.deleteCollection(collection);
})
