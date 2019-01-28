const handsfree = new Handsfree({hideCursor: true})
// handsfree.start()

handsfree.use({
  name: 'robotController',
  
  onFrame (poses) {
    poses.forEach(pose => {
      robot.position.setValue(pose.face.translationX / handsfree.)
    })
  }
})

/* global
Handsfree
*/