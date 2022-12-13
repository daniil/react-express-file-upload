# File Upload Example Using React, axios, Express and Multer

## App Breakdown

This app is an intentionally simple example of using [`multer`](https://www.npmjs.com/package/multer) to upload files to an Express server that are then served as static files.

While the app has image upload for an example, `multer` can be used for general file upload.

Also, this example shows a single file upload functionality, but `multer` supports multiple file uploads as well. There are great examples in documentation.

The app also uses an XMLHttpRequest using axios, instead of form submission to show how to implement that.

This example uses JSON file to store the file metadata on the server, to show what can be done with the file once uploaded, but the data storage can be anything else for real application (ie: DB).

There is also an example of consuming the data from front-end to show how uploaded files can be used as static files from Express server.

The application has extensive comments throughout to help make sense of the flow, but check Main Considerations section if you are having issues - the main gotchas are listed there.

## Main Considerations

### Front-End

- When making a POST request, the data sent via request needs to be `FormData`
- You need to include `'Content-Type': 'multipart/form-data'` header with your request

### Back-End

- Using `multer` can be broken down into these main steps:
  - `require` the library
  - Configure where to upload images and how to name uploaded files
  - Create an upload method by using `multer` library with the config
  - Use the upload method as a middleware to upload your files as part of a request endpoint
- In `diskStorage` the `destination` is relative to where the server file is located, ie: `index.js`
- In `diskStorage` the `filename` prepends the timestamp to original filename to avoid name clashes for same filenames
- For `multer` methods, the argument passed in, ie: `imageFile` in `upload.single('imageFile')` needs to match the `FormData` key coming from the front-end
- After request data is processed via `multer`, the text data will be available via `req.body` while files via `req.file` (for single) or `req.files` (for multiple)
- The file parameter will have the original file name available as `originalname` and final filename after upload as `filename`