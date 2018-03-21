var _gSettings = {
    background_game: "game/toon_pitch_full_1.jpg",
    soundMute: true,
    neverOver: true,
    hideAllTeams: true,
    enablePickUP: false,
    enablePlay: false,
    enableSelectTeam: false
};

var _gTeamManager = {
    A: {},
    B: {},
    resetStartPosition: function () {
        this.A.team.children[0].position.x = 600;
        this.A.team.children[1].position.x = 600;
        this.B.team.children[0].position.x = 1100;
        this.B.team.children[1].position.x = 1100;
    }
};