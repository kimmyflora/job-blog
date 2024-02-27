const InterviewModel = require('../models/interview')


module.exports = {
    create,
    delete: deleteOne

}




//function to delete the new tip
async function deleteOne(req, res) {
    try {
        const interviewDoc = await InterviewModel.findOne({ 'tips._id': req.params.id, 'tips.user': req.user._id })
        if (!interviewDoc) return res.redirect('/interviews')
        interviewDoc.tips.remove(req.params.id)
        interviewDoc.save()
        res.redirect(`/interviews/${interviewDoc._id}`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }

}




//function to create a new tip 
async function create(req, res) {
    try {
        const interviewDoc = await InterviewModel.findbtId(req.params.id)
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        interviewDoc.tips.push(req.body);
        await interviewDoc.save()
        res.redirect(`/interviews/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}