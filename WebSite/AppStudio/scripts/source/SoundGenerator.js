var SoundGenerator = {
    tempo: 60,
    PI_2: 2 * Math.PI,
    sample_rate: 44100,
    soundId: 0,
    sounds: {},
    notes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87, 32.7, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49, 51.91, 55, 58.27, 61.74, 65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185, 196, 207.65, 220, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26,
        698.46, 739.99, 783.99, 830.61, 880, 932.33, 987.77, 1046.5, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760, 1864.66, 1975.53, 2093, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44, 3520, 3729.31, 3951.07, 4186.01, 4434.92, 4698.64, 4978.03
    ],
    midiInstruments: {},
    midiSounds: {},
    midiNotes: "            C0 Db0 D0 Eb0 E0 F0 Gb0 G0 Ab0 A0 Bb0 B0 C1 Db1 D1 Eb1 E1 F1 Gb1 G1 Ab1 A1 Bb1 B1 C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2 C3 Db3 D3 Eb3 E3 F3 Gb3 G3 Ab3 A3 Bb3 B3 C4 Db4 D4 Eb4 E4 F4 Gb4 G4 Ab4 A4 Bb4 B4 C5 Db5 D5 Eb5 E5 F5 Gb5 G5 Ab5 A5 Bb5 B5 C6 Db6 D6 Eb6 E6 F6 Gb6 G6 Ab6 A6 Bb6 B6 C7 Db7 D7 Eb7 E7 F7 Gb7 G7 Ab7 A7 Bb7 B7 C8 Db8 D8 Eb8 E8 F8 Gb8 G8 Ab8 A8 Bb8 B8 C9 Db9 D9 Eb9 E9 F9 Gb9 G9 Ab9 A9 Bb9 B9".split(" "),
    midiAudioPlayer: null,
    midiReplayer: null,
    midiSynth: null
};
$(document).ready(function () {
    if (!window.AudioContext && window.webkitAudioContext) window.AudioContext = window.webkitAudioContext;
    if (window.AudioContext) SoundGenerator.context = new AudioContext
});
SoundGenerator.removeSound = function (b, c) {
    var d = SoundGenerator.sounds[b];
    if (d) {
        for (var e = 0; e < d.length; e++)
            if (d[e].id == c) {
                d.splice(e, 1);
                break
            }
        var d = false,
            f;
        for (f in SoundGenerator.sounds)
            if (SoundGenerator.sounds[f].length > 0) {
                d = true;
                break
            }
        d || SoundGenerator.pause()
    }
};
SoundGenerator.removeAll = function () {
    SoundGenerator.sounds = {}
};
SoundGenerator.onaudioprocess = function (b) {
    for (var b = b.outputBuffer.getChannelData(0), c = 0; c < b.length; c++) {
        var d = 0,
            e;
        for (e in SoundGenerator.sounds) {
            var f = SoundGenerator.sounds[e];
            if (f.length > 0) {
                f = f[0];
                d = d + f.func(f.p++);
                f.p >= f.d && SoundGenerator.removeSound(e, f.id)
            }
        }
        b[c] = d
    }
};
SoundGenerator.play = function () {
    if (SoundGenerator.context && SoundGenerator.node == null) {
        SoundGenerator.node = SoundGenerator.context.createScriptProcessor ? SoundGenerator.context.createScriptProcessor(4096, 1, 1) : SoundGenerator.context.createJavaScriptNode(4096, 1, 1);
        SoundGenerator.node.onaudioprocess = SoundGenerator.onaudioprocess;
        SoundGenerator.node.connect(SoundGenerator.context.destination)
    }
};
SoundGenerator.pause = function () {
    if (SoundGenerator.context) {
        SoundGenerator.node.disconnect();
        SoundGenerator.node = null
    }
};
SoundGenerator.loadSound = function (b, c) {
    b = "" + b;
    SoundGenerator.midiSounds[b + c] = soundManager.createSound({
        id: b + c,
        url: "ide/midi/" + b + "/" + c + ".mp3",
        multiShot: true,
        autoLoad: true
    })
};
SoundGenerator.loadInstrument = function (b) {
    if (!SoundGenerator.midiInstruments[b]) {
        SoundGenerator.midiInstruments[b] = AudioSynthPianoProgram;
        return false
    }
    return true
};
SoundGenerator.playNote = function (b, c, d) {
    if (!SoundGenerator.midiReplayer) {
        SoundGenerator.midiSynth = Synth(44100);
        SoundGenerator.midiReplayer = {
            generate: function (b) {
                return SoundGenerator.midiSynth.generate(b)
            }
        };
        SoundGenerator.midiAudioPlayer = AudioPlayer(SoundGenerator.midiReplayer, {
            latency: 0.1
        })
    }
    var e = PROGRAMS[b].createNote(c + 21, 127);
    SoundGenerator.midiSynth.addGenerator(e);
    setTimeout(function () {
        e.noteOff()
    }, d * 1E3)
};
SoundGenerator.loadDrums = function () {
    if (!SoundGenerator.midiInstruments.drums) {
        for (var b = 27; b < 88; b++) SoundGenerator.loadSound("drums", b);
        SoundGenerator.midiInstruments.drums = "loading";
        return false
    }
    return SoundGenerator.drumsReady("drums")
};
SoundGenerator.drumsReady = function () {
    if (SoundGenerator.midiInstruments.drums == "ready") return true;
    for (var b = 27; b < 88; b++) {
        var c = SoundGenerator.midiSounds["drums" + b];
        if (!c || !c.loaded) return false
    }
    SoundGenerator.midiInstruments.drums = "ready";
    return true
};
SoundGenerator.playDrum = function (b, c) {
    var d = SoundGenerator.midiSounds["drums" + b];
    if (d) {
        d.play();
        window.setTimeout(function () {
            d.stop()
        }, c * 1E3)
    }
};
var MediaCapture = {
    initialized: !1,
    supportsCapture: !1,
    audioStream: null,
    videoStream: null,
    audioNode: null,
    init: function () {
        if (!MediaCapture.initialized) {
            window.URL = window.URL || window.webkitURL;
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            if (window.URL && window.AudioContext && navigator.getUserMedia) MediaCapture.supportsCapture = true;
            MediaCapture.initialized =
                true
        }
    },
    _update: function () {
        if (MediaCapture.ctxSrc) {
            try {
                MediaCapture.ctxSrc.drawImage(MediaCapture.videoEl, 0, 0, 640, 480, 0, 0, 1364, 768);
                MediaCapture._processMotion()
            } catch (b) { }
            window.setTimeout(MediaCapture._update, videoUpdateInterval)
        }
    },
    _processMotion: function () {
        var b = MediaCapture.ctxSrc.canvas.width,
            c = MediaCapture.ctxSrc.canvas.height,
            d = MediaCapture.ctxSrc.getImageData(0, 0, b, c);
        if (!MediaCapture.lastImageData) MediaCapture.lastImageData = MediaCapture.ctxSrc.getImageData(0, 0, b, c);
        MediaCapture._computeDifference(MediaCapture.blendedData.data,
            d.data, MediaCapture.lastImageData.data);
        MediaCapture.ctxBlended.putImageData(MediaCapture.blendedData, 0, 0);
        MediaCapture.lastImageData = d
    },
    _computeDifference: function (b, c, d) {
        if (c.length != d.length) return null;
        for (var e = 0, f = c.length; e < f;) {
            var g = d[e] + d[e + 1] + d[e + 2] - (c[e] + c[e + 1] + c[e + 2]),
                g = g > 64 ? 255 : g < -64 ? 255 : 0;
            b[e] = g;
            b[e + 1] = g;
            b[e + 2] = g;
            b[e + 3] = 255;
            e = e + 4
        }
    },
    getBuffer: function (b, c, d, e) {
        return MediaCapture.ctxBlended ? MediaCapture.ctxBlended.getImageData(b, c, d, e) : null
    },
    showVideo: function (b, c, d) {
        MediaCapture.supportsCapture ?
            navigator.getUserMedia({
                video: true
            }, function (e) {
                MediaCapture.videoEl = b;
                b.src = window.URL.createObjectURL(e);
                MediaCapture.videoStream = e;
                if ($("canvas#blended").length == 0) {
                    var f = $('<canvas id="blended" style="display:none;position:absolute;bottom:0px;right:0px;width:128px;height:' + parseInt(c.height / c.width * 128) + 'px;" width="' + c.width + '" height="' + c.height + '"></canvas>');
                    $("body").append(f);
                    MediaCapture.ctxBlended = f[0].getContext("2d")
                }
                MediaCapture.ctxSrc = c.getContext("2d");
                MediaCapture.ctxSrc.restore();
                MediaCapture.ctxSrc.save();
                if (!d) {
                    MediaCapture.ctxSrc.translate(c.width, 0);
                    MediaCapture.ctxSrc.scale(-1, 1)
                }
                MediaCapture.blendedData = MediaCapture.ctxSrc.createImageData(MediaCapture.ctxSrc.canvas.width, MediaCapture.ctxSrc.canvas.height);
                MediaCapture._update();
                console.log("begin");
                console.log(b);
                console.log(e)
            }, function () {
                console.log("failed")
            }) : console.log("failed2")
    },
    hideVideo: function () {
        if (MediaCapture.supportsCapture && MediaCapture.videoStream) {
            for (var b = MediaCapture.videoStream.getTracks(), c = 0; c <
                b.length; c++) b[c].stop();
            MediaCapture.videoStream = null;
            MediaCapture.videoEl = null;
            MediaCapture.ctxSrc.clearRect(0, 0, MediaCapture.ctxSrc.canvas.width, MediaCapture.ctxSrc.canvas.height);
            MediaCapture.ctxSrc = null;
            $("canvas#blended").detach();
            MediaCapture.ctxBlended = null
        }
    },
    startCaptureAudioLevel: function () {
        if (MediaCapture.audioStream) {
            var b = MediaCapture.audioStream.getAudioTracks();
            if (b)
                for (var c = 0; c < b.length; c++) b[c].stop();
            MediaCapture.audioStream = null
        }
        MediaCapture.audioNode = null;
        if (MediaCapture.supportsCapture) {
            MediaCapture._beginCaptureAudioLevel =
                true;
            var d = new AudioContext;
            navigator.getUserMedia({
                audio: true
            }, function (b) {
                var c = d.createMediaStreamSource(b);
                MediaCapture.audioStream = b;
                MediaCapture.audioNode = c.context.createScriptProcessor(4096, 2, 2);
                MediaCapture.audioNode.onaudioprocess = function (b) {
                    var c = b.inputBuffer.getChannelData(0),
                        b = b.inputBuffer.getChannelData(1);
                    MediaCapture._soundCaptureCallback(c, b)
                };
                c.connect(MediaCapture.audioNode);
                MediaCapture.audioNode.connect(c.context.destination)
            }, function () {
                console.log("failed")
            })
        }
    },
    stopCaptureAudioLevel: function () {
        if (MediaCapture.supportsCapture &&
            MediaCapture.audioNode && MediaCapture.audioStream)
            for (var b = MediaCapture.audioStream.getAudioTracks(), c = 0; c < b.length; c++) b[c].stop();
        MediaCapture.audioStream = null;
        MediaCapture._beginCaptureAudioLevel = false
    },
    isCapturingAudio: function () {
        return MediaCapture.audioStream != null || MediaCapture._beginCaptureAudioLevel
    },
    _soundCaptureCallback: function (b, c) {
        for (var d = 0, e = 0; e < b.length; e = e + 16) {
            var f = b[e],
                g = c[e];
            f < 0 ? -f > d && (d = -f) : f > 0 && f > d && (d = f);
            g < 0 ? -g > d && (d = -g) : g > 0 && g > d && (d = g)
        }
        MediaCapture._soundCaptureLevel = d > 1 ?
            1 : d
    },
    getSoundLevel: function () {
        return MediaCapture.audioStream ? MediaCapture._soundCaptureLevel : 0
    }
};
$(document).ready(function () {
    MediaCapture.init()
});