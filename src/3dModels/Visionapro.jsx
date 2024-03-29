import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Visionpro.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.003, 0.047, -0.001]} rotation={[1.398, -0.379, 0.383]} scale={0.03}>
        <group scale={100}>
          <group rotation={[-1.391, 0.433, 0.282]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh geometry={nodes.Object_14.geometry} material={materials.FAJMtZQLswdvuhO} />
              <mesh geometry={nodes.Object_16.geometry} material={materials.VxpiigirruNOshp} />
              <mesh geometry={nodes.Object_18.geometry} material={materials.FFhjkYvBaxmGeMa} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.ZwEHHHBVBsIGFLj} />
              <mesh geometry={nodes.Object_22.geometry} material={materials.FFhjkYvBaxmGeMa} />
              <mesh geometry={nodes.Object_25.geometry} material={materials.AjnVirXQeiPgFmd} />
              <mesh geometry={nodes.Object_27.geometry} material={materials.xYIhbFReGzikXuj} />
              <mesh geometry={nodes.Object_29.geometry} material={materials.FEdJjbtHQhrLkPc} />
              <mesh geometry={nodes.Object_31.geometry} material={materials.msHgsHSWlHxyhfo} />
              <mesh geometry={nodes.Object_33.geometry} material={materials.TapGHbYtpjcGEyh} />
              <mesh geometry={nodes.Object_35.geometry} material={materials.XHmyiGBFGvanMAr} />
              <mesh geometry={nodes.Object_37.geometry} material={materials.GvidsfHBLmyLFLj} />
              <mesh geometry={nodes.Object_39.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.Object_41.geometry} material={materials.XHmyiGBFGvanMAr} />
              <mesh geometry={nodes.Object_45.geometry} material={materials.DesySQuVkxDlAlp_0} />
              <mesh geometry={nodes.Object_47.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.Object_49.geometry} material={materials.uCIAdpMWlBjnYvL} />
              <mesh geometry={nodes.Object_51.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.Object_53.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.Object_55.geometry} material={materials.oRyqyBedXgltlyh} />
              <mesh geometry={nodes.Object_57.geometry} material={materials.LCFAOHKyQkTpEQF} />
              <mesh geometry={nodes.Object_60.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.Object_62.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.Object_64.geometry} material={materials.oRyqyBedXgltlyh} />
              <mesh geometry={nodes.Object_66.geometry} material={materials.DesySQuVkxDlAlp_0} />
              <mesh geometry={nodes.Object_68.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.Object_70.geometry} material={materials.uCIAdpMWlBjnYvL} />
              <mesh geometry={nodes.Object_72.geometry} material={materials.dFHMyPBpPqeTjiL} />
              <mesh geometry={nodes.Object_74.geometry} material={materials.fBnoCDaWrdqLbCS} />
              <mesh geometry={nodes.Object_77.geometry} material={materials.QqwPOMufQnLHpVb} />
              <mesh geometry={nodes.Object_79.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.Object_81.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.Object_84.geometry} material={materials.XNhEODEcVemrRSu} />
              <mesh geometry={nodes.Object_86.geometry} material={materials.pMiARQLBeNgKOAx} />
              <mesh geometry={nodes.Object_88.geometry} material={materials.NJTstBdwEqVPDBG} />
              <mesh geometry={nodes.Object_90.geometry} material={materials.UvuKGGVdlOxVUeA} />
              <mesh geometry={nodes.Object_92.geometry} material={materials.pMiARQLBeNgKOAx} />
              <mesh geometry={nodes.Object_94.geometry} material={materials.ySrzecxrjVirfze} />
              <mesh geometry={nodes.Object_97.geometry} material={materials.hzzIZvnSVXHRIpk} />
              <mesh geometry={nodes.Object_99.geometry} material={materials.LrbPxjZrLaPVhbL} />
              <mesh geometry={nodes.Object_101.geometry} material={materials.JvGMyHWKpFKorez} />
              <mesh geometry={nodes.Object_106.geometry} material={materials.OcjoBBhHkqmGEeg} />
              <mesh geometry={nodes.Object_108.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.Object_110.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.Object_112.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.Object_114.geometry} material={materials.NLXCMSpYzHeRKCy} />
              <mesh geometry={nodes.Object_116.geometry} material={materials.HjiVKkmzDRBQwcd} />
              <mesh geometry={nodes.Object_118.geometry} material={materials.nirjontYTAixgEJ} />
              <mesh geometry={nodes.Object_121.geometry} material={materials.HjiVKkmzDRBQwcd} />
              <mesh geometry={nodes.Object_123.geometry} material={materials.nirjontYTAixgEJ} />
              <mesh geometry={nodes.Object_125.geometry} material={materials.NLXCMSpYzHeRKCy} />
              <mesh geometry={nodes.Object_127.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.Object_129.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.Object_134.geometry} material={materials.LlnrRvRtBSKKJtZ} />
              <mesh geometry={nodes.Object_136.geometry} material={materials.IUXXlUlgvhvFPzz} />
              <mesh geometry={nodes.Object_138.geometry} material={materials.gFHmZYZAcTzegfV} />
              <mesh geometry={nodes.Object_141.geometry} material={materials.gFHmZYZAcTzegfV} />
              <mesh geometry={nodes.Object_143.geometry} material={materials.LlnrRvRtBSKKJtZ} />
              <mesh geometry={nodes.Object_145.geometry} material={materials.IUXXlUlgvhvFPzz} />
              <mesh geometry={nodes.Object_148.geometry} material={materials.RWqkxBAMyYvCfAW} />
              <mesh geometry={nodes.Object_151.geometry} material={materials.kPwwriYXUEalYIj} />
              <mesh geometry={nodes.Object_153.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.Object_155.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.Object_157.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_160.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_162.geometry} material={materials.hQMaJbjPDPOUdry} />
              <mesh geometry={nodes.Object_164.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.Object_166.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.Object_168.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_170.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_173.geometry} material={materials.WicotZnvNvRZKUL} />
              <mesh geometry={nodes.Object_176.geometry} material={materials.sWxIuDoQFWtTiiB} />
              <mesh geometry={nodes.Object_179.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.Object_181.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.Object_183.geometry} material={materials.FOugkDgsmvxAjLB} />
              <mesh geometry={nodes.Object_186.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_188.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_190.geometry} material={materials.HAvYQJgmRpVYpqr} />
              <mesh geometry={nodes.Object_193.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_195.geometry} material={materials.snsykSygkWSDIlk} />
              <mesh geometry={nodes.Object_200.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_202.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_204.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_206.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_208.geometry} material={materials.NLAQCwOxsrAPIlV} />
              <mesh geometry={nodes.Object_210.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_212.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_214.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_216.geometry} material={materials.nctcFIvFhZfKDLQ} />
              <mesh geometry={nodes.Object_218.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_220.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.Object_222.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_225.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_227.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_229.geometry} material={materials.nctcFIvFhZfKDLQ} />
              <mesh geometry={nodes.Object_231.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_233.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_235.geometry} material={materials.NLAQCwOxsrAPIlV} />
              <mesh geometry={nodes.Object_237.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.Object_239.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_241.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_243.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.Object_245.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.Object_248.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.Object_250.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.Object_252.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.Object_254.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.Object_257.geometry} material={materials.snsykSygkWSDIlk} />
              <mesh geometry={nodes.Object_259.geometry} material={materials.CzTcyZGBTOTEuIC} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Visionpro.gltf')
