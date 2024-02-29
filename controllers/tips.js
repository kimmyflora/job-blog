const interview = require('../models/interview');
const InterviewModel = require('../models/interview')


module.exports = {
    create,
    delete: deleteOne,
    update

}


//function to update a tip

async function update(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const interview = await InterviewModel.findOne({ 'tips._id': req.params.id });
    // Find the tip subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const tipsSubdoc = interview.tips.id(req.params.id);
    console.log(tipsSubdoc, "THIS IS TIPSDOCS") //testing to see if it works 
    console.log(req.body, "THIS IS REQ.BODY") //testing to see if it works 
    // Ensure that the content was created by the logged in user
    if (!interview) return res.redirect('/interviews')
    // Update the tip of the content
    tipsSubdoc.content = req.body.text;
    try {
        await interview.save();
    } catch (e) {
        console.log(e.message);
    }
    // Redirect back to show view
    res.redirect(`/interviews/${interview._id}`);
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
        const interviewDoc = await InterviewModel.findById(req.params.id)
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