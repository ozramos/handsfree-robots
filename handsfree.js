const handsfree = new Handsfree({hideCursor: true})
// handsfree.start()

handsfree.use({
  name: 'robotController',

  onUse () {
  },
  
  onFrame (poses) {
    poses.forEach(pose => {
      robot.position.x.setValue(pose.face.translationX / handsfree.debug.$canvas.width * 30 - 15)
      robot.position.y.setValue(20)
      robot.position.z.setValue(-pose.face.translationY / handsfree.debug.$canvas.height * 40 + 30)
      // robot.position.y.setValue(pose.face.translationY / handsfree.debug.$canvas.height * 10)
    })
  }
})

/* global
Handsfree, robot
*/