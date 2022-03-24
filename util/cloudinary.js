const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: 'duttajssa',
  api_key: '298759946781755',
  api_secret: 'qDO1Hui2vCv6pGMVNnQmeYCRwBI',
});

module.exports = { cloudinary };
