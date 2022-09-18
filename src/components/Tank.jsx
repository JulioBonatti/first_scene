import { EffectComposer, Bloom } from '@react-three/postprocessing'


export default function Tank(props) {
    const { position, geometry, color } = props
    return (
        <mesh  position={position}>
            <EffectComposer multisampling={8}>
                <Bloom kernelSize={3} luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={1} />
            </EffectComposer>
            <cylinderGeometry args={geometry}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}