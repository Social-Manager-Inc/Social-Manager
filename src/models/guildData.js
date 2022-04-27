const mongoose=require("mongoose"),channeldb=new mongoose.Schema({serverID:{type:String,required:!0},prefix:{type:String,required:!0,default:"*"},auto_autoplay:{type:Boolean,required:!1,default:!1},vote_skip:{type:Boolean,required:!1,default:!0},buttons:{type:Boolean,required:!1,default:!0},goodPremium:{type:String,required:!1,default:null},requestChannel:{type:String,required:!1,default:null},requestMessage:{type:String,required:!1,default:null},defaultVolume:{type:String,required:!1,default:50},vcs:{type:Array,required:!1,default:[]},txts:{type:Array,required:!1,default:[]},auto_shuffle:{type:String,required:!1,default:null},dj_role:{type:String,required:!1,default:null},h24:{type:String,required:!1,default:null},announce:{type:String,required:!1,default:!0},dj_commands:{type:Array,required:!1,default:["autoplay","back","clearqueue","forceskip","forward","givedj","jump","leavecleanup","loop","move","pause","resume","remove","removedupes","replay","rewind","seek","shuffle","stop","volume"]},textchannel:{type:String,required:!1,default:!0}});module.exports=mongoose.model("guildData",channeldb);