{
  "project": {
    "description": "fgsdfgsdfgsdfgsdfg",
    "background": {
      "scaleType": "stretch",
      "width": 1364,
      "height": 768,
      "canvasWidth": 420,
      "canvasHeight": 236,
      "canvasExpand": true,
      "currentBackground": 0,
      "scripts": [ ],
      "backgrounds": [ ],
      "sounds": [ ]
    },
    "sprites": [
      {
        "label": "actor",
        "scripts": [
          {
            "func": "registerFlagTrigger",
            "values": [ ],
            "next": {
              "func": "blockMotionRotationStyle",
              "values": [
                {
                  "type": "choice",
                  "value": "left-right"
                }
              ],
              "next": {
                "func": "blockControlForever",
                "values": [ ],
                "containers": [
                  {
                    "func": "blockAnimationSimpleSwitchCostume",
                    "values": [
                      {
                        "type": "string",
                        "value": "Walk"
                      }
                    ],
                    "next": {
                      "func": "blockMotionMove",
                      "values": [
                        {
                          "type": "number",
                          "value": "10"
                        }
                      ],
                      "next": {
                        "func": "blockMotionBounceOnEdge",
                        "values": [ ],
                        "next": {
                          "func": "blockControlWait",
                          "values": [
                            {
                              "type": "number",
                              "value": 0.05
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            },
            "x": 20,
            "y": 20
          }
        ],
        "costumes": [
          {
            "name": "actor",
            "img": "avatar:\/\/spine",
            "cx": 500,
            "cy": 500
          }
        ],
        "currentCostume": 1,
        "sounds": [ ],
        "scale": 0.5,
        "x": 0,
        "y": 0,
        "rotation": 0,
        "rotateLock": 1,
        "hidden": false,
        "isHidden": false,
        "volume": 100,
        "locked": false,
        "hiddenInSandbox": false,
        "lockedInSandbox": false,
        "zIndex": 2,
        "physics": {
          "isStatic": false,
          "isActive": true,
          "geometry": "rectangular",
          "density": 1,
          "friction": 0.5,
          "restitution": 0.2
        },
        "variables": [ ],
        "varDefaults": [ ],
        "lists": [ ],
        "classname": "actor",
        "skeletonType": "Troll",
        "skeletonParts": {
          "Eyes": "Codey",
          "Hat": "Codey",
          "Head": "Codey",
          "Horns": "Codey",
          "Left Arm": "Codey",
          "Left Leg": "Codey",
          "Left Wing": "blank",
          "Right Arm": "Codey",
          "Right Leg": "Codey",
          "Right Wing": "blank",
          "Mouth": "Codey",
          "Torso": "Codey"
        }
      }
    ],
    "libs": [ ],
    "variables": [ ],
    "cloudVariables": [ ],
    "varDefaults": [ ],
    "lists": [ ],
    "cloudLists": [ ],
    "physics": {
      "enabled": false,
      "gravity": {
        "x": 0,
        "y": 10
      }
    },
    "name": "Level 1",
    "levels": [
      {
        "name": "Level 1",
        "screenshotid": "59940faf76f293df258b458e"
      }
    ],
    "currentLevel": 0,
    "projectName": "gfgdsgsd",
    "ownerid": "597ffc4b5ae02906568b4568",
    "owner": {
      "_id": { "$id": "597ffc4b5ae02906568b4568" },
      "username": "flusteredclock183",
      "password": "d49887b586ce3e23ac98a4de8402753e0125aba801de9cf08b68b5690263fef9f953c5dc5c44376c3ddf531141b2b5d2f19cdb0f76b5c011729ccca2a7e7697e",
      "preferences": {
        "avatar": "\/imgs\/avatars\/av_chemistry.png",
        "category-pin": "on"
      },
      "user_created": {
        "sec": 1501559883,
        "usec": 654000
      },
      "updatedOn": {
        "sec": 1501561120,
        "usec": 814000
      },
      "anongroup": 2,
      "role": "student",
      "anonymous": true,
      "hashedid": "be90733d50bc0f2cd5375dbf1c1598bc9aa07ff9ac80a70c9e1abe6f37b8a57254bee2eadb75a06d31e482ec85349ae8ae5e1f8fcac42bda83de923efc34961f",
      "xp": { "xp_points": 0 },
      "numCompleted-2016": 0,
      "full_name": null,
      "displayName": "flusteredclock183"
    }
  },
  "tags": [ "art", "game", "learn", "robotics", "story", "video", "fgsdfgdfgsdfgsdfg" ],
  "metadata": { "tags": [ "art", "game", "learn", "robotics", "story", "video", "fgsdfgdfgsdfgsdfg" ] }
}