# File Upload Example Using React, Express and Multer

## App Breakdown

This app is an intentionally simple example of using [`multer`](https://www.npmjs.com/package/multer) to upload files to an Express server that are then served as static files.

While the app has image upload for an example, `multer` can be used for general file upload.

This example uses JSON file to store the file data on the server, to show what can be done with the file once uploaded, but the data storage can be anything else for real application.

There is also an example of consuming the data from front-end to show how uploaded files can be used as static files from Express server.

The application has extensive comments throughout to help make sense of the flow, but check Main Considerations section if you are having issues - the main gotchas are listed there.

## Main Considerations