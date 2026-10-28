/**
 * Romantic Audio Engine for Karwa Chauth Surprise
 * Supports both custom audio files (e.g. MP3) and a built-in
 * procedural romantic ambient harp/piano chord synthesizer via Web Audio API.
 */

class RomanticAudioManager {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.isPlaying = false;
    this.synthInterval = null;
    this.currentStep = 0;
    this.subscribers = new Set();
    this.isMuted = false;
    this.volume = 0.55;
    this.mode = 'synth'; // 'custom' or 'synth'
  }

  init(customSrc) {
    if (this.audioElement) return;

    if (customSrc) {
      this.audioElement = new Audio(customSrc);
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;

      this.audioElement.addEventListener('error', () => {
        // Fallback to Web Audio synthesizer if custom audio is not available
        this.mode = 'synth';
      });

      this.audioElement.addEventListener('playing', () => {
        this.mode = 'custom';
        this.notify(true);
      });

      this.audioElement.addEventListener('pause', () => {
        this.notify(false);
      });
    }
  }

  getAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  // Heavenly romantic pentatonic melody (D4, F#4, A4, B4, C#5, D5, E5, F#5, A5)
  // Inspired by romantic Indian ragas (like Yaman / Bhoopali) and soft harp plucks
  playSynthNote(freq, duration = 2.2, type = 'sine') {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Soft attack, gentle exponential decay
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18 * this.volume, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  startRomanticSynth() {
    if (this.synthInterval) return;

    // Peaceful meditative romantic raga notes in Hz
    // D4: 293.66, F#4: 369.99, A4: 440.00, B4: 493.88, C#5: 554.37, D5: 587.33, E5: 659.25, F#5: 739.99
    const notes = [
      293.66, 369.99, 440.00, 587.33,
      493.88, 440.00, 369.99, 293.66,
      369.99, 440.00, 554.37, 587.33,
      659.25, 587.33, 440.00, 369.99
    ];

    const chords = [
      [146.83, 293.66, 440.00], // D root drone
      [164.81, 329.63, 493.88], // Em
      [185.00, 369.99, 554.37], // F#m
      [220.00, 440.00, 587.33], // A/D
    ];

    let noteIdx = 0;
    let chordIdx = 0;

    // Play initial drone
    chords[0].forEach(f => this.playSynthNote(f, 4.0, 'triangle'));

    this.synthInterval = setInterval(() => {
      if (!this.isPlaying) return;

      const f = notes[noteIdx % notes.length];
      this.playSynthNote(f, 2.5, 'sine');

      // Add harmonic sparkle
      if (noteIdx % 3 === 0) {
        this.playSynthNote(f * 2, 1.8, 'sine');
      }

      // Chord progression drone every 4 notes
      if (noteIdx % 4 === 0) {
        chordIdx = (chordIdx + 1) % chords.length;
        chords[chordIdx].forEach(freq => this.playSynthNote(freq, 3.8, 'triangle'));
      }

      noteIdx++;
    }, 900);
  }

  stopRomanticSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  async play() {
    this.isPlaying = true;

    // Try custom audio first if available
    if (this.audioElement && this.mode === 'custom') {
      try {
        await this.audioElement.play();
        this.notify(true);
        return;
      } catch {
        // Fallback to synth if blocked or error
        this.mode = 'synth';
      }
    }

    // Fallback: Web Audio synth
    this.getAudioContext();
    this.startRomanticSynth();
    this.notify(true);
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopRomanticSynth();
    this.notify(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this.isPlaying);
    return () => this.subscribers.delete(callback);
  }

  notify(status) {
    this.isPlaying = status;
    this.subscribers.forEach(cb => cb(status));
  }
}

export const romanticAudio = new RomanticAudioManager();
