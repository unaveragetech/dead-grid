## Dead Grid 1.4.0: deeper systems on the road to beta 2

Android `.apk` only.

### What's new
- **The workbench repair game.** Fix broken robots and drones in the workshop by hand: drag each part (chip, resistor, capacitor, diode, fuse) into its socket on the circuit board without touching the glowing live traces. Three zaps and the board fries. Heavier machines have more parts and more traces. Find it in Robots or Drones → Workbench.
- **Supplies are physical.** Outposts pile up what they produce. It only counts once it reaches storage at the HQ or a new **Depot** outpost, which adds storage space. Outposts next to the HQ or a depot, or joined to them by walls, are carted in automatically. Robots ferry supplies from the rest. Raiders steal unguarded piles first, and food rots if it sits too long.
- **Territory walls.** Build palisades from an outpost to its neighbours and back to the HQ. They stop the dead, link your supply lines, and get repaired by day after the dead break through.
- **A fleet that grows with your land.** Every 3 blocks you hold adds a drone pad, and each robot works outpost adds another, up to 10 drones.
- **No two survivors alike.** Every survivor gets a unique face (face shape, eyes, brows, nose, scars, freckles, earrings, masks, hats, grey hair) whose expression follows their mood. Each also gets their own hobby, habit, catchphrase and sleep schedule. They spend free time on their hobby, night owls stay up, and it all shows in their profile, thoughts and conversations.

### Fixes
- Robots now drop their current job to fetch large supply piles from outposts that aren't connected to storage.

### Tested
- Simulated about four in-game days with outposts, a depot, a palisade, robot ferrying and raids: no script errors. All 10 survivors came out with distinct faces, hobbies and catchphrases.
- The workbench game: a drag across a live trace registers a zap, and a completed board fixes the robot.
- The APK built, signed with the pinned key and passed the version check. It has not been run on a physical phone.
