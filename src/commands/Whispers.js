Bukkit = Java.type("org.bukkit.Bukkit");
function onCommand(sender,args) {
    if (args.length < 2){
        sender.sendMessage("用法: /whisper <玩家> <内容>")
        return;
    }
    target = Bukkit.getPlayer(args[0]);
    msg = args[1];
    if (!target.isOnline()){
        sender.sendMessage("目标玩家不在线.");
        return;
    }
    target.sendMessage(sender.getName() + "对你说: "+msg);
    sender.sendMessage("你对 " + sender.getName() + "说:" +msg);
}
api.registerCommand("whisper","example.whisper","commands/Whispers.onCommand")