import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './components/Box'
import Tank from './components/Tank'
import Plane from './components/Plane'



export default function App() {
    return (
        <div id="canvas-container" style={{ width: '100%', height: '600px', color: 'grey' }}>
            <Canvas camera={{ position: [1, 1, 5] }} >
                <color attach="background" args={['#25282b']} />
                <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
                <ambientLight intensity={0.2} />
                <directionalLight color="green" position={[1, 3, 5]} />
                <Box position={[0, 0, -10]} geometry={[21, 3, 1]}/>
                <Box position={[0, 0, 10]} geometry={[21, 3, 1]}/>
                <Box position={[-10, 0, 0]} geometry={[1, 3, 20]}/>
                <Box position={[10, 0, 6]} geometry={[1, 3, 9]}/>
                <Box position={[10, 0, -6]} geometry={[1, 3, 9]}/>
                <Tank position={[7, 0, -4.5]} geometry={[1, 1, 2, 20]}/>
                <Tank position={[0, 0, -4.5]} geometry={[1, 1, 2, 20]}/>
                <Tank position={[-7, 0, -4.5]} geometry={[1, 1, 2, 20]}/>
                <Box position={[10, 0, 0]} geometry={[1, 3, 2.8]} color={'#cc8181'}/>
                <Plane position={[0, 0, 0]} geometry={[20, 20]} color={'grey'}/>
            </Canvas>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))
