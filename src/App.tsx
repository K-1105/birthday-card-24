import React, { Component } from "react";
import { Torso } from "./assets/torsoSVG.tsx";
import { Face } from "./assets/faceSVG.tsx";
import { Cake } from "./assets/cakeSVG.tsx";
import Particles from "./assets/particles.tsx";
import Confetti from 'react-confetti'


// Left arm component
interface ArmProps {
  animation: string;
  armPath: string;
}

const ArmLeft: React.FC<ArmProps> = ({ animation, armPath }) => (
  <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
    {animation === "happy" && <path className="arm-happy-left" d={armPath} />}
    {animation === "crazy" && <path className="arm-happy-left" d={armPath} />}
    {animation === "surprising" && (
      <path d="M80,154c1,0,0,0,-50,-120" />
    )}
    {animation === "eating" && (
      <path d="M80,154s-10.18,82-36.43,103.72" />
    )}
    {animation === "still" && (
      <path d="M80,154s-10.18,82-36.43,103.72" />
    )}
    {animation === "start" && (
      <path d="M80,154s-10.18,82-36.43,103.72" />
    )}
  </svg>
);

// Right arm component
const ArmRight: React.FC<ArmProps> = ({ animation, armPath }) => (
  <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
    {animation === "happy" && <path className="arm-happy-right" d={armPath} />}
    {animation === "crazy" && <path className="arm-happy-right" d={armPath} />}
    {animation === "surprising" && (
      <path d="M217,140c1,0,0,0,50,-120" />
    )}
    {animation === "eating" && (
      <path className="arm-eating-right" d="M217,154s-76,114.16-93-9.84" />
    )}
    {animation === "still" && (
      <path d="M217,154c.57-.48,11.3,86.45-23.43,112.52" />
    )}
    {animation === "start" && (
      <path d="M217,154c.57-.48,11.3,86.45-23.43,112.52" />
    )}
  </svg>
);

interface AppState {
  animation: string;
  armPath: string;
  frequency: number;
  amplitude: number;
  xstart: number;
  ystart: number;
  length: number;
  offset: number;
  fps: number;
  armPathL: string;
  armPathR: string;
}

class App extends Component<{}, AppState> {
  loopRef: number | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      animation: "start",
      armPath: "M 207 171",
      frequency: 3,
      amplitude: 0.1,
      xstart: 207,
      ystart: 171,
      length: 110,
      offset: 0,
      fps: 60,
      armPathL: "",
      armPathR: "",
    };
    this.createCurve = this.createCurve.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this.updateArms = this.updateArms.bind(this);
    this.loop = this.loop.bind(this);
  }

  createCurve(x: number, offset: number, inverted = false): number {
    const { frequency, ystart, xstart, amplitude } = this.state;
    const phase = inverted
      ? Math.sqrt(x * frequency) - offset
      : Math.sqrt(x * frequency) + offset;
    return ystart - Math.sin(phase) * (x - xstart) * amplitude;
  }

  updateArms() {
    const { ystart, xstart, length } = this.state;
    let x = xstart;
    let dataL = `M ${xstart} ${ystart}`;
    let dataR = `M ${xstart} ${ystart}`;

    while (x < xstart + length) {
      const newYL = this.createCurve(x, this.state.offset);
      const newYR = this.createCurve(x, this.state.offset, true);
      dataL = `${dataL} L ${x} ${newYL}`;
      dataR = `${dataR} L ${x} ${newYR}`;
      x += 1;
    }
    this.setState({
      armPathL: dataL,
      armPathR: dataR,
    });
  }

  loop() {
    const { offset, animation, fps } = this.state;
    if (animation !== "happy" && animation !== "crazy") {
      clearTimeout(this.loopRef as number);
      return;
    }
    this.setState({
      offset: offset + 0.3,
    });
    this.updateArms();
    this.loopRef = window.setTimeout(() => {
      requestAnimationFrame(this.loop);
    }, 1000 / fps);
  }

  setAnimation(newAnimation: string, speed?: number) {
    const defaultState = {
      animation: newAnimation,
      fps: speed || 60,
      frequency: 3,
      amplitude: 0.1,
    };

    this.setState(defaultState);

    if (newAnimation === "happy" || newAnimation === "crazy") {
      clearTimeout(this.loopRef as number);
      requestAnimationFrame(this.loop);
    }
  }

  setConfig(e: React.ChangeEvent<HTMLInputElement>) {
    const type = e.target.name;
    this.setState({
      [type]: parseFloat(e.target.value),
    } as unknown as Pick<AppState, keyof AppState>);
  }

  render() {
    const { frequency, amplitude, animation } = this.state;
    return (
      <div className="app">
        <h1 className="intro">Dear DrEve,</h1>
        <h1>Have a</h1>
        <div className="controls">
          <button onClick={() => this.setAnimation("surprising")}>surprising</button>
          <button onClick={() => this.setAnimation("eating")}>bountiful</button>
          <button onClick={() => this.setAnimation("happy")}>happy</button>
          <button onClick={() => this.setAnimation("crazy", 240)}>crazy</button>
          <button onClick={() => this.setAnimation("still")}>restful</button>
        </div>
        <h1>Birthday</h1>

        {animation === "eating" && (
              <Particles type="hearts" />
        )}
        <svg className="wrapper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          {/* <Character animation={this.state.animation} armPath={""} /> */}
          <Torso />
          <Face />
          <ArmRight animation={this.state.animation} armPath={this.state.armPathR} />
          <ArmLeft animation={this.state.animation} armPath={this.state.armPathL} />
          <Cake />
        </svg>
        {animation === "crazy" && (
          <div className="sliders">
            <input id="input1"
              type="range"
              step="0.01"
              name="frequency"
              value={frequency}
              onChange={this.setConfig}
              min="0"
              max="2"
            />
            <input id="input2"
              type="range"
              step="0.01"
              name="amplitude"
              value={amplitude}
              onChange={this.setConfig}
              min="0.05"
              max="1.5"
            />
            <div>
              <p>craziness adjusters</p>
            </div>
          </div>
        )}
        {animation === "surprising" && (
              <Confetti  confettiSource={{
                x: document.documentElement.scrollWidth*0.45, 
                y: document.documentElement.scrollWidth*0.6, 
                w: document.documentElement.scrollWidth*0.1, 
                h: document.documentElement.scrollWidth*0.1, 
              }}/>
        )}
      </div>
    );
  }
}

export default App;
