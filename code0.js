gdjs.Introdu_231_227oCode = {};
gdjs.Introdu_231_227oCode.localVariables = [];
gdjs.Introdu_231_227oCode.GDbackgroundObjects1= [];
gdjs.Introdu_231_227oCode.GDbackgroundObjects2= [];
gdjs.Introdu_231_227oCode.GDPainelObjects1= [];
gdjs.Introdu_231_227oCode.GDPainelObjects2= [];
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1= [];
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects2= [];
gdjs.Introdu_231_227oCode.GDCursorObjects1= [];
gdjs.Introdu_231_227oCode.GDCursorObjects2= [];
gdjs.Introdu_231_227oCode.GDAcerto2Objects1= [];
gdjs.Introdu_231_227oCode.GDAcerto2Objects2= [];
gdjs.Introdu_231_227oCode.GDAcertoObjects1= [];
gdjs.Introdu_231_227oCode.GDAcertoObjects2= [];
gdjs.Introdu_231_227oCode.GDAcerto3Objects1= [];
gdjs.Introdu_231_227oCode.GDAcerto3Objects2= [];
gdjs.Introdu_231_227oCode.GDAcerto4Objects1= [];
gdjs.Introdu_231_227oCode.GDAcerto4Objects2= [];


gdjs.Introdu_231_227oCode.asyncCallback14743364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Introdu_231_227oCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introdução_02", false);
}gdjs.Introdu_231_227oCode.localVariables.length = 0;
}
gdjs.Introdu_231_227oCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Introdu_231_227oCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Introdu_231_227oCode.asyncCallback14743364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Introdu_231_227oCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introdu_231_227oCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDCursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introdu_231_227oCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDCursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1[k] = gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Introdu_231_227oCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Introdu_231_227oCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Introdu_231_227oCode.GDbackgroundObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDbackgroundObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPainelObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPainelObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDCursorObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDCursorObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto2Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto2Objects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcertoObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcertoObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto3Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto3Objects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto4Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto4Objects2.length = 0;

gdjs.Introdu_231_227oCode.eventsList1(runtimeScene);
gdjs.Introdu_231_227oCode.GDbackgroundObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDbackgroundObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPainelObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPainelObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDCursorObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDCursorObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto2Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto2Objects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcertoObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcertoObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto3Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto3Objects2.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto4Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDAcerto4Objects2.length = 0;


return;

}

gdjs['Introdu_231_227oCode'] = gdjs.Introdu_231_227oCode;
