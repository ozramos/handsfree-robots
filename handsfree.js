const handsfree = new Handsfree({hideCursor: true, debug: true})

handsfree.use({
  name: 'robotController',

  onFrame (poses) {
    poses.forEach(pose => {
      robot.position.x.setValue(pose.face.translationX / handsfree.debug.$canvas.width * 30 - 15)
      robot.position.y.setValue(20 + pose.face.scale / handsfree.debug.$canvas.width * 10)
      robot.position.z.setValue(-pose.face.translationY / handsfree.debug.$canvas.height * 35 + 20)
      robot.rotation.x.setValue(pose.face.rotationX * -4 - 1.5708)
      robot.rotation.y.setValue(pose.face.rotationY * -4)
      // robot.position.y.setValue(pose.face.translationY / handsfree.debug.$canvas.height * 10)
    })
  }
})

/* global
Handsfree, robot
*/