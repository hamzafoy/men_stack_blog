import JobPost from '../models/JobPosting.js'; //importing the Database model for use in POST requests

const listingFormStore = async(req, res) => {
    await JobPost.create(req.body);
    res.redirect('/');
};

export default listingFormStore;