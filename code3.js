gdjs.Raio_45XCode = {};
gdjs.Raio_45XCode.localVariables = [];
gdjs.Raio_45XCode.GDbackgroundObjects1= [];
gdjs.Raio_45XCode.GDbackgroundObjects2= [];
gdjs.Raio_45XCode.GDPainelObjects1= [];
gdjs.Raio_45XCode.GDPainelObjects2= [];
gdjs.Raio_45XCode.GDbtn_9595nextObjects1= [];
gdjs.Raio_45XCode.GDbtn_9595nextObjects2= [];
gdjs.Raio_45XCode.GDCursorObjects1= [];
gdjs.Raio_45XCode.GDCursorObjects2= [];
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1= [];
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2= [];
gdjs.Raio_45XCode.GDGarotoObjects1= [];
gdjs.Raio_45XCode.GDGarotoObjects2= [];
gdjs.Raio_45XCode.GDAcerto2Objects1= [];
gdjs.Raio_45XCode.GDAcerto2Objects2= [];
gdjs.Raio_45XCode.GDAcertoObjects1= [];
gdjs.Raio_45XCode.GDAcertoObjects2= [];
gdjs.Raio_45XCode.GDAcerto3Objects1= [];
gdjs.Raio_45XCode.GDAcerto3Objects2= [];
gdjs.Raio_45XCode.GDAcerto4Objects1= [];
gdjs.Raio_45XCode.GDAcerto4Objects2= [];


gdjs.Raio_45XCode.asyncCallback15122412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Raio_45XCode.localVariables.length = 0;
}
gdjs.Raio_45XCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Raio_45XCode.asyncCallback15122412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Raio_45XCode.asyncCallback15123004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}gdjs.Raio_45XCode.localVariables.length = 0;
}
gdjs.Raio_45XCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Raio_45XCode.asyncCallback15123004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Raio_45XCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Raio_45XCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Raio_45XCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Garoto"), gdjs.Raio_45XCode.GDGarotoObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 2, true, 60, 1);
}{for(var i = 0, len = gdjs.Raio_45XCode.GDGarotoObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDGarotoObjects1[i].resetTimer("animacao");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Raio_45XCode.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[k] = gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Raio_45XCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Raio_45XCode.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDbtn_9595nextObjects1[k] = gdjs.Raio_45XCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Raio_45XCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garoto"), gdjs.Raio_45XCode.GDGarotoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDGarotoObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDGarotoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("animacao") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDGarotoObjects1[k] = gdjs.Raio_45XCode.GDGarotoObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDGarotoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Raio_45XCode.GDGarotoObjects1 */
{for(var i = 0, len = gdjs.Raio_45XCode.GDGarotoObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDGarotoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomFloatInRange(0, 3));
}
}{for(var i = 0, len = gdjs.Raio_45XCode.GDGarotoObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDGarotoObjects1[i].resetTimer("animacao");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Raio_45XCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Raio_45XCode.GDbackgroundObjects1.length = 0;
gdjs.Raio_45XCode.GDbackgroundObjects2.length = 0;
gdjs.Raio_45XCode.GDPainelObjects1.length = 0;
gdjs.Raio_45XCode.GDPainelObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Raio_45XCode.GDCursorObjects1.length = 0;
gdjs.Raio_45XCode.GDCursorObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.Raio_45XCode.GDGarotoObjects1.length = 0;
gdjs.Raio_45XCode.GDGarotoObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects2.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects1.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto3Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto3Objects2.length = 0;
gdjs.Raio_45XCode.GDAcerto4Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto4Objects2.length = 0;

gdjs.Raio_45XCode.eventsList2(runtimeScene);
gdjs.Raio_45XCode.GDbackgroundObjects1.length = 0;
gdjs.Raio_45XCode.GDbackgroundObjects2.length = 0;
gdjs.Raio_45XCode.GDPainelObjects1.length = 0;
gdjs.Raio_45XCode.GDPainelObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Raio_45XCode.GDCursorObjects1.length = 0;
gdjs.Raio_45XCode.GDCursorObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.Raio_45XCode.GDGarotoObjects1.length = 0;
gdjs.Raio_45XCode.GDGarotoObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects2.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects1.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto3Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto3Objects2.length = 0;
gdjs.Raio_45XCode.GDAcerto4Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto4Objects2.length = 0;


return;

}

gdjs['Raio_45XCode'] = gdjs.Raio_45XCode;
