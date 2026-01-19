import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

const shaderGradientProps = {
  animate: "on",
  axesHelper: "off",
  brightness: 1,
  cAzimuthAngle: 180,
  cDistance: 2.81,
  cPolarAngle: 80,
  cameraZoom: 9.1,
  color1: "#606080",
  color2: "#8d7dca",
  color3: "#212121",
  destination: "onCanvas",
  embedMode: "off",
  envPreset: "city",
  format: "gif",
  fov: 45,
  frameRate: 10,
  gizmoHelper: "hide",
  grain: "on",
  lightType: "3d",
  pixelDensity: 1,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 50,
  rotationY: 0,
  rotationZ: -60,
  shader: "defaults",
  type: "waterPlane",
  uAmplitude: 0,
  uDensity: 1.5,
  uFrequency: 0,
  uSpeed: 0.1,
  uStrength: 1.5,
  uTime: 8,
  wireframe: false
}

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pointerEvents="none"
      >
        <ShaderGradient {...shaderGradientProps} />
      </ShaderGradientCanvas>
    </div>
  )
}
