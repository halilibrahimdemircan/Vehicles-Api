# Vehicles API

-Download the project and run it with "node index.js" after "npm i"
-You can use Postman for testing routes
-Firstly you should create some vehicle samples using routes below

-




REQUESTS

-GET ( "http://localhost:8000/api/car/:color" )
    Response : {
        "status": "success",
        "data": [
            {
                "id": 5,
                "color": "",
                "headlight": false,
                "wheel": "195/60/15",
                "createdAt": "2022-03-24T18:58:37.000Z",
                "updatedAt": "2022-03-24T18:58:37.000Z"
            },
            {
                "id": 11,
                "color": "black",
                "headlight": true,
                "wheel": "195/60/15",
                "createdAt": "2022-03-24T18:58:37.000Z",
                "updatedAt": "2022-03-24T18:58:37.000Z"
            }
        ],
        "text": "Successfully fetched cars"
    }

-GET ()

-GET ()

-POST("http://localhost:8000/api/car/:id", req.body: {
    "headlight" : "off"
    })
    Response: {
        "status": "success",
        "data": [
            1,
            [
                {
                    "id": 1,
                    "color": "red\n",
                    "headlight": false,
                    "wheel": "195/60/15",
                    "createdAt": "2022-03-24T18:58:37.000Z",
                    "updatedAt": "2022-03-24T19:30:25.480Z"
                }
            ]
        ]
    }

-DELETE ( "http://localhost:8000/api/car/:id" )
    Res: status:204 No Content

