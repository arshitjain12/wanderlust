const Listing = require("../models/listing");
const Review = require("../models/review.js");

module.exports.createReview = async(req, res)=>{
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    // console.log(newReview);

    await newReview.save();
    await listing.save();
    console.log("review is save")
    req.flash("success","new review created");

    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    // reviews aray se reviewit delete krna h reviews array se reviewid match hoa or pull(delete) 
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted!");
    res.redirect(`/listings/${id}`);
  }