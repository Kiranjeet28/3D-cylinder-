import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
function App() {
 
  return (
  
  <Canvas camera={{fov:35}} flate>
    <OrbitControls/>
   <ambientLight/>
   <Scene/>
   <EffectComposer>
<Bloom
    intensity={0.9} // The bloom intensity.
    nipmapBlur
    luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
    mipmapBlur={false} // Enables or disables mipmap blur.
   
  />
  {/* <ToneMapping adaptive/> */}
</EffectComposer>

  
   </Canvas>
  )
}

export default App
