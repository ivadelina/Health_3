export default function healthStatus(char) {
    if(char.health < 15) {
        return "critical";
    } else if(char.health > 50) {
        return "healthy"
    } else return "wounded"
}
