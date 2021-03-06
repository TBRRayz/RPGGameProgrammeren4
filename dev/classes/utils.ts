class Utils {
    public static checkCollision(g1: GameObject, g2: GameObject) : boolean {
        return(
            g1.x < g2.x + g2.width &&
            g1.x + g1.width > g2.x &&
            g1.y < g2.y + g1.height &&
            g1.height + g1.y > g2.y
        );
    }

}