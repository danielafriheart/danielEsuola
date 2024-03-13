import React, { Suspense, useState } from 'react';
import { Model as Jbl } from '../3dModels/Jbl'
import { Model as Visionpro } from '../3dModels/Visionapro'
import { Model as Whitexbox } from '../3dModels/Whitexbox'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Paragraph from '../layout/typography/Paragraph';
import Section from '../layout/container/Section';
import Header from '../layout/typography/Header';


const Interests = () => {
    const [activeTab, setActiveTab] = useState(2);

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
        <Section className='flex flex-col lg:gap-28 gap-10'>

            <section>
                <div className='lg:flex justify-between place-items-center space-y-3 twoColumnResponsiveness'>
                    <Header leadingText={'Personal Interest'} className={'lg:w-fit lg:text-[8rem]'} />
                    <Paragraph text={'"CLICK & DRAG AROUND"'} variant={'base'} />
                </div>
            </section>

            <div className='lg:grid lg:grid-cols-[45%,55%] sm:grid-cols-[30%,70%] flex flex-col-reverse gap-0 h-fit personalInterest'>
                <div className=''>
                    <section className='flex flex-col justify-evenly h-full'>
                        <div className='w-full flex flex-col lg:space-y-2 lg:my-0  my-10 lg:mb-0 '>
                            <Paragraph
                                delay={100}
                                variant={'label'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 1 ? 'underline' : 'text-black/30'}`}
                                text="Gaming"
                                active={activeTab === '1'}
                                onClick={() => handleTabChange(1)}
                            />
                            <Paragraph
                                delay={200}
                                variant={'label'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 3 ? 'underline' : 'text-black/30'}`}
                                text="Virtual Reality"
                                active={activeTab === '3'}
                                onClick={() => handleTabChange(3)}
                            />
                            <Paragraph
                                delay={300}
                                variant={'label'}
                                className={`cursor-pointer hover:underline underline-offset-4 transition-all duration-300 ${activeTab === 2 ? 'underline' : 'text-black/30'}`}
                                text="Music"
                                active={activeTab === '2'}
                                onClick={() => handleTabChange(2)}
                            />
                        </div>
                        {
                            activeTab === 1 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    className={'header'}
                                    variant={'paragraph'}
                                    text={'Xbox 360 / Playstation'}
                                    delay={200}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'Most of my gaming time goes to FIFA. I often play God Of War, Call of Duty, Marvel\'s Spider-Man and a few others.'}
                                    delay={300}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={"I'm also exploring VR gaming with Oculus."}
                                    delay={400}
                                />
                            </div>
                        }
                        {
                            activeTab === 2 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    className={'header'}
                                    variant={'paragraph'}
                                    text={'An Eclectic Music Taste'}
                                    delay={200}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'From the upbeat rhythms of Amapiano, Afrobeat to the soulful melodies of Fuji, I find myself drawn to the unique sounds and styles of different genres.'}
                                    delay={300}
                                />
                            </div>
                        }
                        {
                            activeTab === 3 &&
                            <div className='flex flex-col gap-5'>
                                <Paragraph
                                    className={'header'}
                                    variant={'paragraph'}
                                    text={'Vision Pro / Oculus'}
                                    delay={200}
                                />
                                <Paragraph
                                    variant={'label'}
                                    text={'The concept of being able to fully immerse myself in a completely different world, with the ability to interact with it as if it were real, is absolutely thrilling to me.'}
                                    delay={300}
                                />
                            </div>
                        }
                    </section>
                </div>

                <div className='lg:h-[70vh] h-[35vh] canvas'>
                    <Canvas
                        onMouseEnter={changeCursorHere}
                        onMouseLeave={defaultCursor}
                        className='h-[100%] hover:cursor-grab'
                        data-aos="fade-in"
                        data-aos-delay={300}
                        data-aos-easing="ease-in-sine"
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
