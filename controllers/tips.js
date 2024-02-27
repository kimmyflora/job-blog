const InterviewModel = require('../models/interview')
const { create } = require('../models/user')

module.exports = {
    create,

}

async function create(req,res){
    try{
        const interviewDoc = await InterviewModel.findbtId(req.params.id)
        req.body.user = req.user._id
		req.body.userName = req.user.name
		req.body.userAvatar = req.user.avatar

        interviewDoc.reviews.push(req.body); 
        await interviewDoc.save()
        res.redirect(`/interviews/${req.params.id}`)
    } catch(err){
        console.log(err)
        res.send(err)
    }
}