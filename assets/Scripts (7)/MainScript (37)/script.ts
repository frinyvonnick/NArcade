let gravityForce = 0.02;

Sup.ArcadePhysics2D.setGravity(0, -gravityForce);

let levelManager = new LevelManager();
let groupManager = new GroupsManager();
let messagesManager = new MessagesManager();
let playerManager = new PlayerManager();

levelManager.start();

// FIXME : A deplacer
playerManager.setPlayerName("yvonnick");