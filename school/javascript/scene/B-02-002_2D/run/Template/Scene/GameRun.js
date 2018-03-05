function onInitRun(senceWidth, senceHeight)
{
    i_senceWidth = senceWidth;
    i_senceHeight = senceHeight;
    IKCoderSenceRun_Begin();
}

var i_GameRender;
var i_stage;
var i_hud;
var i_loader;
var i_person;
var i_spritesObjectsPool = {};

var i_status_stop = "0";
var i_status_set_runningsteps = 0;
var i_status_set_jumpsteps = 0;


var i_person_default_position_y;
var i_person_default_position_x;
var i_person_ClipView;
var i_person_currentPosition_X;
var i_person_targetStep;
var i_person_currentStep = 0;
var i_person_jumpTimes = 0;
var i_person_jumpFlag = false;

var i_ground_position_Y;
var i_background_default_width = 1286;
var i_background_default_height = 640;
var i_senceWidth;
var i_senceHeight;

var i_animation_shine_count = 0;
var i_collisionmap = {};

CollisionNode = function () {
    this.position_x = 0;
    this.position_y = 0;
    this.width = 0;
    this.height = 0;
    this.isPickup = false;
};

function IKCoderSenceRun_Set_RunningSteps()
{
    i_status_set_runningsteps++;
}

function IKCoderSenceRun_Set_JumpSteps() {
    i_status_set_jumpsteps++;
}

function IKCoderSenceRun_Reset() {
    i_person_ClipView.stop();
    i_person_ClipView.position.x = 100;
    i_person_ClipView.position.y = i_background_default_height - 161;
    i_status_set_jumpsteps = 0;
    i_status_set_runningsteps = 0;
    i_status_stop = "1";
}

function IKCoderSenceRun_Begin()
{
    interactive = false;
    document.body.scroll = "no";

    i_GameRender = PIXI.autoDetectRenderer(i_background_default_width, i_background_default_height);
    
    Scene.container.append(i_GameRender.view);
    i_stage = new PIXI.Stage();
       
    IKCoderSenceRun_Resize(i_senceWidth, i_senceHeight);

    i_loader = new PIXI.AssetLoader([
   "image/scene/run/shine.fw.png",
   "image/scene/run/candy.fw.png",
   "image/scene/run/PixiAssets-hd.json",
   "image/scene/run/iP4_BGtile.jpg",
   "image/scene/run/box.fw.png"
    ]);

    i_loader.addEventListener('onComplete', function (event) {
        IKCoderSenceRun_InitResources();
    });

    i_loader.load();
}


function IKCoderSenceRun_InitResources() {
    IKCoderSenceRun_InitSenceSprites();
}

function IKCoderSenceRun_Start() {
    i_status_stop = "0";
    if (i_status_set_runningsteps > 0)
        IKCoderSenceRun_Person_RunStep(i_status_set_runningsteps);
    if (i_status_set_jumpsteps > 0)
        IKcoderSenceRun_Person_StartJump(i_status_set_jumpsteps);
}

function IKCoderSenceRun_AddcollisonNode(name,position_x,position_y,width,height,isPickup)
{
    var collisonObj = new CollisionNode();
    collisonObj.position_x = position_x;
    collisonObj.position_y = position_y;
    collisonObj.width = width;
    collisonObj.height = height;
    collisonObj.isPickup = isPickup;
    i_collisionmap[name] = collisonObj;
}

function IKCoderSenceRun_InitSenceSprites() {
    IKCoderSenceRun_AddSprite('image/scene/run/iP4_BGtile.jpg', i_background_default_width, i_background_default_height, -1, -1);
   
    i_ground_position_Y = i_background_default_height - 161;

    var sprite_box_one = IKCoderSenceRun_AddSprite('image/scene/run/box.fw.png', -1, -1, 300, i_background_default_height - 161);
    IKCoderSenceRun_AddcollisonNode("box_1", 300, i_background_default_height - 161, sprite_box_one.width, sprite_box_one.height,false);

    IKCoderSenceRun_AddSprite('image/scene/run/box.fw.png', -1, -1, 480, i_background_default_height - 161);
    IKCoderSenceRun_AddcollisonNode("box_2", 480, i_background_default_height - 161, sprite_box_one.width, sprite_box_one.height,false);

    IKCoderSenceRun_AddSprite('image/scene/run/box.fw.png', -1, -1, 680, i_background_default_height - 561);
    IKCoderSenceRun_AddcollisonNode("box_3", 680, i_background_default_height - 561, sprite_box_one.width, sprite_box_one.height,false);
    
    IKCoderSenceRun_AddSprite('image/scene/run/box.fw.png', -1, -1, 880, i_background_default_height - 421);
    IKCoderSenceRun_AddcollisonNode("box_4", 800, i_background_default_height - 421, sprite_box_one.width, sprite_box_one.height,false);
    
    var sprite_pickup_sunshine = IKCoderSenceRun_AddSprite('image/scene/run/shine.fw.png', -1, -1, 1110, i_background_default_height - 121);
    sprite_pickup_sunshine.anchor.x = sprite_pickup_sunshine.anchor.y = 0.5;
    i_spritesObjectsPool["sprite_pickup_sunshine"] = sprite_pickup_sunshine;
    var sprite_pickup_candy = IKCoderSenceRun_AddSprite('pickup_06.png', -1, -1, 1080, i_background_default_height - 141);
    i_spritesObjectsPool["sprite_pickup_candy"] = sprite_pickup_candy;

    IKCoderSenceRun_AddcollisonNode("image/scene/run/candy.fw.png", 1080, i_background_default_height - 141, sprite_pickup_candy.width, sprite_pickup_candy.height, true);
    IKCoderSenceRun_Animation_PickupShine();

    IKCoderSenceRun_PersonInit(100, i_background_default_height - 161);
    
}

function IKCoderSenceRun_Animation_PickupShine()
{
    i_spritesObjectsPool["sprite_pickup_sunshine"].rotation = i_animation_shine_count * 0.2;
    i_animation_shine_count = i_animation_shine_count + 0.1;
    i_GameRender.render(i_stage);
    requestAnimationFrame(IKCoderSenceRun_Animation_PickupShine);
}

function IKCoderSenceRun_PersonInit(positionX,positionY)
{
    var runningFrames = [
        PIXI.Texture.fromFrame("characterRUNscaled_01.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_02.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_03.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_04.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_05.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_06.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_07.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_08.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_09.png")
    ];

    i_person_ClipView = new PIXI.MovieClip(runningFrames);
    i_person_ClipView.animationSpeed = 0.2;
    i_person_ClipView.position.x = positionX;
    i_person_ClipView.position.y = positionY;   
    i_stage.addChild(i_person_ClipView);
}

function IKCoderSenceRun_Person_RunStep(step)
{
    i_person_ClipView.play();
    i_person_targetStep = step * 10;
    IKCoderSenceRun_Person_RunStepAnimation();
}

function IKCoderSenceRun_Person_StopAnimation()
{
    i_person_ClipView.stop();
    i_status_stop = "1";
}



function IKcoderSenceRun_Person_StartJump(times)
{
    i_person_jumpTimes = times * 10;
    i_person_jumpFlag = true;
    IKCoderSenceRun_Person_JumpStepAnimation();
}

function IKcoderSenceRun_Person_StopJump()
{
    i_person_jumpFlag = false;
}

function IKCoderSenceRun_Person_CheckCollision(current_X,currect_Y,spriteWidth,spiteHeight)
{
    for (var activeCollisionKey in i_collisionmap) {
        var activeObject = i_collisionmap[activeCollisionKey];
        var left_x = activeObject.position_x;
        var left_y = activeObject.position_y;
        var right_x = activeObject.position_x + spriteWidth;
        var leftbelow_y = left_y + spiteHeight;
        if(current_X >= left_x && current_X <=right_x)
        {
            if((currect_Y >= left_y && currect_Y <= leftbelow_y) || (currect_Y+spiteHeight >= left_y && currect_Y+spiteHeight <= leftbelow_y))
            {
                if (!activeObject.isPickup)
                    return "1";
                else
                    return "2";
            }           
        }
    }
    return "0";
}


function IKCoderSenceRun_Person_JumpStepAnimation()
{
    if (i_status_stop == "1")        
        return;
    if (i_person_jumpFlag == true) {
        i_person_ClipView.stop();
        if (i_person_jumpTimes > 0) {
            if (i_person_ClipView.position.y > i_person_ClipView.height) {
                i_person_ClipView.position.y = i_person_ClipView.position.y - 2;
                i_person_jumpTimes--;
            }
            else
            {
                i_person_jumpFlag = false;
            }
            requestAnimationFrame(IKCoderSenceRun_Person_JumpStepAnimation);
        }
        else
        {
            i_person_jumpFlag = false;
            requestAnimationFrame(IKCoderSenceRun_Person_JumpStepAnimation);
        }
    }
    else {
        if (i_person_ClipView.position.y < i_ground_position_Y) {
            if (i_person_ClipView.position.y + 2 >= i_ground_position_Y) {
                i_person_ClipView.play();
                i_person_ClipView.position.y = i_ground_position_Y;
            }
            else {
                i_person_ClipView.position.y = i_person_ClipView.position.y + 2;
                requestAnimationFrame(IKCoderSenceRun_Person_JumpStepAnimation);
            }
        }
    }
}

function IKCoderSenceRun_Person_RunStepAnimation()
{
    if (i_status_stop == "1")
        return;
    if (i_person_currentStep < i_person_targetStep) {
        if (i_person_ClipView.position.x < i_background_default_width - i_person_ClipView.width) {
            i_person_ClipView.position.x = i_person_ClipView.position.x + 2;
            i_person_currentStep++;
            var checkResult = IKCoderSenceRun_Person_CheckCollision(i_person_ClipView.position.x, i_person_ClipView.position.y, i_person_ClipView.width, i_person_ClipView.height);
            if (checkResult=="1")
            {
                IKCoderSenceRun_Person_StopAnimation();
                Scene.stepFaild();
            }
            else if (checkResult == "2")
            {
                IKCoderSenceRun_Person_StopAnimation();
                Scene.stepComplete();
            }
            requestAnimationFrame(IKCoderSenceRun_Person_RunStepAnimation);
        }
        else
            i_person_ClipView.stop();
    }
    else
    {        
        i_person_ClipView.stop();
    }
}




function IKCoderSenceRun_Resize(width, height)
{
    i_GameRender.view.style.width = width+"px";
    i_GameRender.view.style.height = height+"px";
}

function IKCoderSenceRun_AddSprite(fileURI, width, height, startX, startY) {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(fileURI));
    if (width >= 0)
        sprite.width = width;
    if (height >= 0)
        sprite.height = height;
    if (startX >= 0)
        sprite.position.x = startX;
    if (startY >= 0)
        sprite.position.y = startY;
    i_stage.addChild(sprite);
    i_GameRender.render(i_stage);
    return sprite;

}