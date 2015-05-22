Template.tv.helpers({
  currentChannel: function(){
    return "https://www.youtube.com/embed/" + TV.findOne().currentChannel + "?autoplay=1";
  }
});
