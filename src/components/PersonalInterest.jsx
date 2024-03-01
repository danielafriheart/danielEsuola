import React, { Suspense, useState } from 'react';
// import ContainerHeader from '../../layouts/container/ContainerHeader';
import { Model as Jbl } from '../3dModels/Jbl'
import { Model as Visionpro } from '../3dModels/Visionapro'
import { Model as Whitexbox } from '../3dModels/Whitexbox'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Paragraph from '../layout/typography/Paragraph';
import Section from '../layout/container/Section';
import Header from '../layout/typography/Header';


const Interests = () => {
    const [activeTab, setActiveTab] = useState(3);

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
    };

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorHere = () => {
        cursor.classList.add('clickAndDrag')
    }
    const defaultCursor = () => {
        cursor.classList.remove('clickAndDrag')
    }

    return (
        <Section className='flex flex-col lg:gap-28 gap-10 '>

            <section>
                <div className='lg:flex justify-between place-items-center'>
                    <Header
                        leadingText={'PERSONAL INTEREST'}
                        className={'lg:w-fit md:w-1/3 font-thin'}
                        data_aos_delay={'500'}
                    />
                    <Paragraph
                        text={'"CLICK & DRAG AROUND"'}
                        variant={'base'}
                        data_aos_delay={'600'}
                    />
                </div>
            </section>

            <div className='lg:grid lg:grid-cols-[45%,55%] md:grid-cols-1 flex flex-col-reverse gap-0 h-fit'>
                <div className=''>
                    <section className='flex flex-col justify-evenly h-full'>
                        <div className='w-full pb-0 flex flex-col lg:space-y-3 mb-10 lg:mb-0'>
                            <Paragraph
                                variant={'paragraph_md'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 1 ? 'underline' : 'text-Gray'}`}
                                text="Gaming"
                                active={activeTab === '1'}
                                onClick={() => handleTabChange(1)}
                            />
                            <Paragraph
                                variant={'paragraph_md'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 3 ? 'underline' : 'text-Gray'}`}
                                text="Virtual Reality"
                                active={activeTab === '3'}
                                onClick={() => handleTabChange(3)}
                            />
                            <Paragraph
                                variant={'paragraph_md'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 2 ? 'underline' : 'text-Gray'}`}
                                text="Music"
                                active={activeTab === '2'}
                                onClick={() => handleTabChange(2)}
                            />
                        </div>
                        {
                            activeTab === 1 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    variant={'paragraph'}
                                    text={'Xbox 360 / Playstation'}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'Most of my gaming time goes to FIFA. I often play God Of War, Call of Duty, Marvel\'s Spider-Man and a few others.'}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={"I'm also exploring VR gaming with Oculus."}
                                />
                            </div>
                        }
                        {
                            activeTab === 2 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    variant={'paragraph'}
                                    text={'An Eclectic Music Taste'}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'From the upbeat rhythms of Amapiano, Afrobeat to the soulful melodies of Fuji, I find myself drawn to the unique sounds and styles of different genres.'}
                                />
                            </div>
                        }
                        {
                            activeTab === 3 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    variant={'paragraph'}
                                    text={'Vision Pro / Oculus'}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'The concept of being able to fully immerse myself in a completely different world, with the ability to interact with it as if it were real, is absolutely thrilling to me.'}
                                />
                                <Paragraph
                                    data_aos_delay={'300'}
                                    variant={'label'}
                                    text={'It is a technology that I am deeply interested in and am excited to see where it takes us in the future.'}
                                />
                            </div>
                        }
                    </section>
                </div>
                <div className='lg:h-[70vh]'>
                    <Canvas
                        onMouseEnter={changeCursorHere}
                        onMouseLeave={defaultCursor}
                        className='h-[100%] hover:cursor-grab'
                    >
                        <Suspense fallback={null}>

                            {
                                activeTab === 1 &&
                                <>
                                    <PerspectiveCamera position={[0.3, 10, 0.3]} fov={45} makeDefault />
                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        enableDamping
                                        dampingFactor={0.25}
                                        rotateSpeed={0.4}
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
                                activeTab === 2 &&
                                <>
                                    <PerspectiveCamera position={[0, 10, 0]} fov={45} makeDefault />
                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        enableDamping
                                        dampingFactor={0.25}
                                        rotateSpeed={0.4}
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
                                activeTab === 3 &&
                                <>
                                    <PerspectiveCamera position={[0.3, 1, -0.3]} fov={45} makeDefault />
                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        enableDamping
                                        dampingFactor={0.25}
                                        rotateSpeed={0.4}
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
                            {/* <axesHelper args={[5]} /> */}
                        </Suspense>
                    </Canvas>
                </div>
            </div>

        </Section>
    );
};

export default Interests;
