var soundManagerFn = function (t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(16),
            o = i(33),
            s = function () {
                this.disabled = !1,
                this.preload = !0,
                this.currentSound = null,
                this.sounds = {},
                this.groups = {},
                this.isMuted = _gSettings.soundMute,
                this.globalVolume = this.isMuted ? 0 : 1,
                window.onfocus = this._onFocus.bind(this),
                this.onMuteToggle = new r
            };
        s.prototype._onFocus = function () { },
        s.prototype.addSound = function (t, e, i) {
            if (!this.disabled && !this.sounds[e]) {
                i = i || {};
                var n = new Howl({
                    src: [t + ".mp3", t + ".ogg"],
                    autoplay: i.autoplay || !1,
                    loop: i.loop || !1,
                    volume: i.volume || 1
                });
                n.realVolume = i.volume || 1, this.sounds[e] = n
            }
        },
        s.prototype.addSounds = function (t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                this.addSound(e + n, n)
            }
        },
        s.prototype.addGroup = function (t, e) {
            if (!this.disabled && !this.groups[e]) {
                var i = {
                    index: 0,
                    type: 0,
                    sounds: t
                };
                this.groups[e] = i
            }
        },
        s.prototype.getSoundAtId = function (t) {
            return this.sounds[t]
        },
        s.prototype.getSound = function (t) {
            return this.currentSound
        },
        s.prototype.play = function (t, e) {
            return this.disabled || !this.sounds[t] ? void !this.sounds[t] : (e && this.sounds[t].volume(e), this.sounds[t].play(), this.currentSound = this.sounds[t], this.currentSound)
        },
        s.prototype.fadeTo = function (t, e, i) {
            if ("undefined" == typeof i && (i = 2.5), "undefined" == typeof callback && (callback = null), "undefined" != typeof e) {
                var n = this.sounds[t];
                n && TweenLite.to(n, i, {
                    _volume: e,
                    onUpdate: this.actuallyChangeVolume.bind(this),
                    onComplete: this.stopAndReset.bind(this),
                    onCompleteParams: [t],
                    onUpdateParams: ["{self}", t]
                })
            }
        },
        s.prototype.actuallyChangeVolume = function (t, e) {
            this.setVolume(e, t.target._volume)
        },
        s.prototype.stopAndReset = function (t) {
            this.stop(t), this.setVolume(t, 1), this.stop(t)
        },
        s.prototype.isPlaying = function (t) {
            if (!this.disabled) return !this.sounds[t]._audioNode[0].paused
        },
        s.prototype.playGroup = function (t) {
            if (!this.disabled && this.groups[t]) {
                var e = this.groups[t],
                    i = Math.random() * e.sounds.length | 0;
                this.sounds[e.sounds[i]].play(), this.currentSound = this.sounds[e.sounds[i]]
            }
        },
        s.prototype.setVolume = function (t, e) {
            if (!this.disabled) {
                var i = this.sounds[t];
                i.realVolume = e, i.volume(e * this.globalVolume)
            }
        },
        s.prototype.stop = function (t) {
            !this.disabled && this.sounds[t] && this.sounds[t].stop()
        },
        s.prototype.stopAll = function () {
            if (!this.disabled)
                for (var t in this.sounds) this.sounds[t].stop()
        },
        s.prototype.setPlaybackSpeed = function (t, e) {
            if (!this.disabled) {
                var i = this.sounds[t];
                i._playbackSpeed = e;
                var n = "music" == t ? 0 : 1;
                i._webAudio && Howler._howls[n]._audioNode[0] && (Howler._howls[n]._audioNode[0].bufferSource.playbackRate.value = e)
            }
        },
        s.prototype.getPlaybackSpeed = function (t) {
            if (!this.disabled) {
                var e = this.sounds[t];
                return e._playbackSpeed || 1
            }
        },
        s.prototype.setGlobalVolume = function (t) {
            this.globalVolume = t;
            for (var e in this.sounds) {
                var i = this.sounds[e];
                i.volume(i.realVolume * t)
            }
        },
        s.prototype.mute = function () {
            this.isMuted = !0, Howler.mute(!0), this.onMuteToggle.dispatch(!0)
        },
        s.prototype.unmute = function () {
            this.isMuted = !1, Howler.mute(!1), this.onMuteToggle.dispatch(!1)
        },
        s.prototype.check = function () {
            this.lastSeen = Date.now();
            var t = function () {
                lastSeen = Date.now(), setTimeout(t, 50)
            };
            t();
            var i = document.getElementById("music");
            i.addEventListener("timeupdate", function () {
                Date.now() - e.lastSeen > 100 && this.pause()
            }, !1)
        },
        s.sfx = new s,
        s.music = new s,
        s.sfx.disabled = !Howler.usingWebAudio,
        o.onHide.add(function () {
            Howler.mute(!0)
        }.bind(this), Howler),
        o.onShow.add(function () {
            s.sfx.isMuted || Howler.mute(!1)
        }.bind(this), Howler),
        n.exports = s
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}