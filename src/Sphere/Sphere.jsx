/* eslint-disable react/no-unknown-property */
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const SphereEffect = () => {
    return (
        <div className="mt-44 w-96 h-[450px] lg:h-full">
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 100]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#FFC107"
                            attach="material"
                            distort={0.3}
                            speed={2}
                        />
                    </Sphere>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default SphereEffect;