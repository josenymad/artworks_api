# Artworks API

Manages artwork data going to and from a MongoDB database.

## Functionality

 - Uploads a PDF file to an AWS S3 bucket and saves the URI to the database.

 - Accepts formData and parses it using Multer.

## Routes

| Route | HTTP Method | Description |
|--------|-------------|------------|
| /api/post | POST | Uploads artwork with corresponding data |
| /api/getAll | GET | Gets all artworks |
| /api/getByCompany?company= | GET | Gets all artworks matching company entered as query string |
| /api/getByPartNumber?partNumber= | GET | Gets all artworks matching part number entered as query string |
| /api/patch/`id` | PATCH | Updates artwork data |
| /api/delete/`id` | DELETE | Deletes artwork |

## Additional features which I'd like to implement

Mocking the AWS S3 correctly in order to write tests. Testing so far using Postman. 
