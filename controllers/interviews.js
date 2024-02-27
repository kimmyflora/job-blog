//import 
const InterviewModel = require('../models/interview')


module.exports = {
    new: newInterview,
    create: create,
    index


}


// function for create 
async function create(req,res){
    try{
        const interviewFromTheDatabase = await InterviewModel.create(req.body);
        console.log(interviewFromTheDatabase)
        res.redirect(`/interviews/$interviewFromTheDatabase._id}`);

    }catch(err){
        console.log(err);
        res.render("interviews/new", {errorMsg: err.message})
        }
    }


// function for index 
async function index(req, res) {
    try {
        const interviewDocumentsFromTheDB = await InterviewModel.find({})
        console.log(interviewDocumentsFromTheDB)
        res.render('interviews/index', {interviewDocs: interviewDocumentsFromTheDB})
    }catch(err){
        console.log(err)
		res.redirect('/')
    }
}


// function for new 
function newInterview(req, res) {
    res.render('interviews/new')
} 