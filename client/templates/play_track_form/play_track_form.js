Template.playTrackForm.events({
    'click #play': function(e, t){
      e.preventDefault();
      var url = t.$('#embed-url').val();
      console.log(url);
      TV.update({_id: TV.findOne()._id},{$set: {'currentChannel': url}});
    }
})
