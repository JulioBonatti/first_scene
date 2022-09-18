import { EffectComposer, Bloom } from '@react-three/postprocessing'


export default function Plane(props) {
    const { position, geometry, color } = props
    return (
        <mesh  position={position}>
            <EffectComposer multisampling={8}>
                <Bloom kernelSize={3} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={1} />
            </EffectComposer>
            <planeGeometry rotateX={Math.PI/4} args={geometry}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}