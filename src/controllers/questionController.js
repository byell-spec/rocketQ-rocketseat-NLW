module.exports = {
  index(request, reponse) {
      const roomId = request.params.room;
      const questionId = request.params.question;
      const action = request.params.action;
      const password = request.body.password;
  } 
}