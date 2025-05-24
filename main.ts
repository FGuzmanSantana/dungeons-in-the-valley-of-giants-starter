player.onChat("dungeons", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    gameplay.setDifficulty(EASY)
    gameplay.setWeather(THUNDER)
    blocks.fill(
    MOSSY_STONE_BRICK_MONSTER_EGG,
    world(20, -61, 20),
    world(-20, -56, -20),
    FillOperation.Hollow
    )
    blocks.fill(
    MONSTER_SPAWNER,
    world(-19, -60, 7),
    world(19, -57, 7),
    FillOperation.Replace
    )
    blocks.fill(
    MONSTER_SPAWNER,
    world(-19, -60, -5),
    world(19, -57, -5),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BARS,
    world(1, -61, 19),
    world(-3, -56, -19),
    FillOperation.Hollow
    )
    blocks.fill(
    SEA_LANTERN,
    world(20, -56, 20),
    world(-20, -56, -20),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(1, -61, 19),
    world(-3, -61, -19),
    FillOperation.Replace
    )
    blocks.place(REDSTONE_BLOCK, world(-1, -61, 18))
    for (let index = 0; index < 50; index++) {
        blocks.place(COBWEB, randpos(
        world(20, -57, 20),
        world(-20, -57, -20)
        ))
    }
    player.teleport(world(-1, -60, 18))
    agent.teleport(world(-1, -60, 16), NORTH)
})
