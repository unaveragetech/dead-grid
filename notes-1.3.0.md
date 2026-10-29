## Dead Grid 1.3.0: the frontier

Android `.apk` only.

### What's new
- **Outposts.** Develop any claimed block into a farm field, barracks, robot works, watchtower, cistern or salvage yard. Each can be upgraded twice. Your base grows into a scattered collective spreading out from the HQ, and every outpost has to be defended.
- **Farmland matters.** Each field lets two more farmers work at full speed, so food shortages now have a fix. Idle survivors go to work empty fields on their own.
- **The dead and the bandits hit outposts.** At night part of the horde goes for your outposts. A fallen outpost stops producing until your crew retakes it or you repair it.
- **Robot swarm.** New Harvester (works fields around the clock) and Warden (holds an outpost) robots. Post any robot to any outpost. Swarm protocol keeps building what the base needs. Robot works add capacity and cut robot costs.
- **Bandit camps.** Hostile groups build new camps closer and closer to you, raid your weakest outpost and steal supplies. Tap a camp to send your robots against it. Burn every camp and the gang scatters.
- **Territory panel** (More → Territory): every outpost, its health, its guards, what it produces, and the bandit camps around you.
- **15 new camp dilemmas,** including missing painkillers, a love triangle, a bandit defector, a leadership challenge, a stray dog, a funeral and a birthday. The same dilemma won't come back until several others have, and choices are remembered by the people involved.

### Fixes
- Crashed drones are now recovered almost automatically. The nearest free robot drops what it's doing to fetch one, stale recovery assignments are cleared, and if no robot is available the drone reboots and limps home on its own.
- Survivors no longer repeat the same thought all day. Lines rotate every few seconds, with many new ones.
- The same two survivors no longer have the same conversation over and over, and the camp's activity log skips near-duplicates.

### Tested
- Simulated about eight in-game days with outposts, the swarm, growing bandit camps and random answers to every dilemma: no script errors. A base with only starter turrets and no player input lasted to day 8.
- Drone recovery checked with and without robots available.
- The APK built, signed with the pinned key and passed the version check. It has not been run on a physical phone.
