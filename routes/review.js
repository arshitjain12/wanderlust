const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const{validateReview ,isLoggedIn,isReviewAuthor}= require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Reviews  post route

//  mtlb id nikali listings ki fir new document banaya Review me  fir push kra reviews (array object me) fir dono ko save 
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

// delete review post route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
