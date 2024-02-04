import React, { useState } from 'react';
// import ContainerHeader from '../../layouts/container/ContainerHeader';
import { Model as Jbl } from '../3dModels/Jbl'
import { Model as Visionpro } from '../3dModels/Visionapro'
import { Model as Whitexbox } from '../3dModels/Whitexbox'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Paragraph from '../layout/typography/Paragraph';
// import Links from '../../layouts/typography/Links';


const Interests = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
    };

    return (
        <section className='flex flex-col lg:gap-20 gap-10 lg:h-[95vh]'>

            <section>
                <div className='flex justify-between'>
                    <span className='flex lg:w-1/4 justify-between'>
                        <Paragraph text={'03/'} />
                        <Paragraph text={'PERSONAL INTEREST'} className={'lg:w-fit w-1/3'} />
                    </span>
                    <Paragraph text={'"CLICK & DRAG AROUND"'} className={'lg:flex hidden'} />
                </div>
                <div className='w-full lg:overflow-x-scroll lg:overflow-y-hidden pb-0 flex lg:flex-row flex-col lg:gap-10 gap-0'>
                    <Paragraph variant={'paragraph'} className={'cursor-pointer'} text="GAMING" active={activeTab === '1'} onClick={() => handleTabChange('1')} />
                    <Paragraph variant={'paragraph'} className={'cursor-pointer'} text="MUSIC" active={activeTab === '2'} onClick={() => handleTabChange('2')} />
                    <Paragraph variant={'paragraph'} className={'cursor-pointer'} text="VR" active={activeTab === '3'} onClick={() => handleTabChange('3')} />
                </div>

            </section>

            <div className='lg:grid lg:grid-cols-[1fr,2fr] flex flex-col-reverse gap-10 h-full'>
                <div className='lg:h-full lg:grid place-content-center'>
                    <section >
                        {
                            activeTab === '1' &&
                            <div className='flex flex-col gap-5'>
                                {/* <Label text={'XBOX 360 / PLAYSTATION'} /> */}
                                <Paragraph text={'Most of my gaming time goes to FIFA. I often play God Of War, Call of Duty, Marvel\'s Spider-Man and a few others.'} />
                                <Paragraph text={'I\'m also exploring VR gaming with Oculus.'} />
                            </div>
                        }
                        {
                            activeTab === '2' &&
                            <div className='flex flex-col gap-5'>
                                {/* <Label text={'AN ECLECTIC MUSIC TASTE'} /> */}
                                <Paragraph text={'From the upbeat rhythms of Amapiano, Afrobeat to the soulful melodies of Fuji, I find myself drawn to the unique sounds and styles of different genres.'} />
                                {/* <Links targetState={'_blank'} href={'#Spotify'} text={'My Spotify Playlist'} hoverState={'always'} title={'Spotify'} /> */}
                            </div>
                        }
                        {
                            activeTab === '3' &&
                            <div className='flex flex-col gap-5'>
                                {/* <Label text={'VISION PRO / OCULUS'} /> */}
                                <Paragraph text={'The concept of being able to fully immerse myself in a completely different world, with the ability to interact with it as if it were real, is absolutely thrilling to me.'} />
                                <Paragraph text={'It is a technology that I am deeply interested in and am excited to see where it takes us in the future.'} />
                            </div>
                        }
                    </section>
                </div>
                <div className='lg:h-full h-[30vh]'>
                    <Canvas className='h-[100%] hover:cursor-grab'>
                        {
                            activeTab === '1' &&
                            <>
                                <PerspectiveCamera position={[0.3, 10, 0.3]} fov={45} makeDefault />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    enableDamping
                                    dampingFactor={0.25}
                                    // rotateSpeed={0.4}
                                    target={[0, 3, 0]} // Set the target to the center of the object
                                    minPolarAngle={[1]}
                                    maxPolarAngle={[0]}
                                />
                                <ambientLight intensity={700} color={'#ffffff'} />
                                <directionalLight castShadow color="#ffffff" position={[0, 10, 5]} intensity={0.5} />
                                <pointLight position={[0, 10, 0]} color={'white'} intensity={50} />

                                <mesh receiveShadow castShadow position={[0, 2, 0]}>
                                    <Whitexbox />
                                </mesh>
                            </>
                        }
                        {
                            activeTab === '2' &&
                            <>
                                <PerspectiveCamera position={[0, 10, 0]} fov={45} makeDefault />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    enableDamping
                                    dampingFactor={0.25}
                                    // rotateSpeed={0.4}
                                    target={[0, 2, 0]} // Set the target to the center of the object
                                    minPolarAngle={[1]}
                                    maxPolarAngle={[0]}
                                />
                                <ambientLight intensity={700} color={'#ffffff'} />
                                <directionalLight castShadow color="#ffffff" position={[0, 10, 5]} intensity={40} />
                                <pointLight position={[0, 10, 0]} color={'white'} intensity={50} />
                                <mesh receiveShadow castShadow position={[0, 0, 0]}>
                                    <Jbl />
                                </mesh>
                            </>
                        }
                        {
                            activeTab === '3' &&
                            <>
                                <PerspectiveCamera position={[0.3, 1, -0.3]} fov={45} makeDefault />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    enableDamping
                                    dampingFactor={0.25}
                                    // rotateSpeed={0.4}
                                    target={[0, 2, 0]} // Set the target to the center of the object
                                    minPolarAngle={[1]}
                                    maxPolarAngle={[0]}
                                />
                                <ambientLight color={'#dddddd'} intensity={0} />
                                <directionalLight castShadow color="#dddddd" position={[50, 10, 0]} intensity={5} />
                                <directionalLight castShadow color="#dddddd" position={[-50, -10, 0]} intensity={3} />
                                <pointLight position={[0, 10, 0]} color={'grey'} intensity={0} />
                                <mesh receiveShadow castShadow position={[0, 2, 0]}>
                                    <Visionpro />
                                </mesh>
                            </>
                        }
                        {/* Display axes to show XYZ dimensions */}
                        <axesHelper args={[5]} />
                    </Canvas>
                </div>
            </div>

        </section>
    );
};

export default Interests;
