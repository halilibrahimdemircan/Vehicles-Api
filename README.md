# Vehicles API

-Download the project and run it with "node index.js" after "npm i"
-You can use Postman for testing routes
-Firstly you should create some vehicle samples using routes below

-




REQUESTS

// for getting cars by color

-GET ( "http://localhost:8000/api/car/:color" )
    Path Parameters : color(required)
    Response : {
        "status": "success",
        "data": [
            {
                "id": integer,
                "color": "string",
                "headlight": "boolean",
                "wheel": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            },
            {
                "id": integer,
                "color": "string",
                "headlight": "boolean",
                "wheel": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
            ...
        ],
        "text": "Successfully fetched cars"
    }
--------------------------------------------------------------
// for getting buses by color

-GET (" http://localhost:8000/api/bus/:color ")

    Path Parameters : color(required)
    Response : {
        "status": "success",
        "data": [
            {
                "id": integer,
                "color": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            },
            {
                "id": integer,
                "color": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
            ...
        ]
    }
--------------------------------------------------------------
// for getting boats by color

-GET ( "http://localhost:8000/api/boat/:color" )

    Path Parameters : color(required)
    Response : {
        "status": "success",
        "data": [
            {
                "id": integer,
                "color": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            },
            {
                "id": integer,
                "color": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
            ...
        ]
    }
--------------------------------------------------------------
// for creating new car in db

-POST ( "http://localhost:8000/api/car" )

    Request Body Schema:
        color(required): "string",
        headlight: boolean,
        wheel: "string"

    Response: {

    "status": "success",
    "data": {
        "id": integer,
        "color": "string",
        "headlight": boolean,
        "wheel": "string",
        "updatedAt": "timestamp",
        "createdAt": "timestamp"
    }
}
--------------------------------------------------------------

-DELETE ( "http://localhost:8000/api/car/:id" )
    Res: status:204 No Content

