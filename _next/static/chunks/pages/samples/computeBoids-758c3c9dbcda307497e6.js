_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"5IKv":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/computeBoids",function(){return a("SR1g")}])},SR1g:function(e,n,a){"use strict";a.r(n);var t=a("o0o1"),s=a.n(t),r=a("HaE+"),i=a("SoUo"),o=a("PpzT");function c(){return(c=Object(r.a)(s.a.mark((function e(n,a){var t,r,i,c,p,f,v,d,m,g,P,h,V,b,x,y,S,M,C,B,_;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=1500,e.next=3,navigator.gpu.requestAdapter();case 3:return r=e.sent,e.next=6,r.requestDevice();case 6:return i=e.sent,e.next=9,Object(o.a)();case 9:for(c=e.sent,p=n.getContext("gpupresent"),f=p.configureSwapChain({device:i,format:"bgra8unorm"}),v=i.createRenderPipeline({vertexStage:{module:a?i.createShaderModule({code:u.vertex}):i.createShaderModule({code:l.vertex,transform:function(e){return c.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:a?i.createShaderModule({code:u.fragment}):i.createShaderModule({code:l.fragment,transform:function(e){return c.compileGLSL(e,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:16,stepMode:"instance",attributes:[{shaderLocation:0,offset:0,format:"float2"},{shaderLocation:1,offset:8,format:"float2"}]},{arrayStride:8,stepMode:"vertex",attributes:[{shaderLocation:2,offset:0,format:"float2"}]}]},colorStates:[{format:"bgra8unorm"}]}),d=i.createComputePipeline({computeStage:{module:a?i.createShaderModule({code:u.compute(t)}):i.createShaderModule({code:l.compute(t),transform:function(e){return c.compileGLSL(e,"compute")}}),entryPoint:"main"}}),m=i.createTexture({size:{width:n.width,height:n.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),g={colorAttachments:[{attachment:void 0,loadValue:{r:0,g:0,b:0,a:1}}],depthStencilAttachment:{attachment:m.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},P=new Float32Array([-.01,-.02,.01,-.02,0,.02]),h=i.createBuffer({size:P.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(h.getMappedRange()).set(P),h.unmap(),V=new Float32Array([.04,.1,.025,.025,.02,.05,.005]),b=i.createBuffer({size:V.byteLength,usage:GPUBufferUsage.UNIFORM,mappedAtCreation:!0}),new Float32Array(b.getMappedRange()).set(V),b.unmap(),x=new Float32Array(4*t),y=0;y<t;++y)x[4*y+0]=2*(Math.random()-.5),x[4*y+1]=2*(Math.random()-.5),x[4*y+2]=2*(Math.random()-.5)*.1,x[4*y+3]=2*(Math.random()-.5)*.1;for(S=new Array(2),M=new Array(2),C=0;C<2;++C)S[C]=i.createBuffer({size:x.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE,mappedAtCreation:!0}),new Float32Array(S[C].getMappedRange()).set(x),S[C].unmap();for(B=0;B<2;++B)M[B]=i.createBindGroup({layout:d.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b,offset:0,size:V.byteLength}},{binding:1,resource:{buffer:S[B],offset:0,size:x.byteLength}},{binding:2,resource:{buffer:S[(B+1)%2],offset:0,size:x.byteLength}}]});return _=0,e.abrupt("return",(function(){g.colorAttachments[0].attachment=f.getCurrentTexture().createView();var e=i.createCommandEncoder(),n=e.beginComputePass();n.setPipeline(d),n.setBindGroup(0,M[_%2]),n.dispatch(t),n.endPass();var a=e.beginRenderPass(g);a.setPipeline(v),a.setVertexBuffer(0,S[(_+1)%2]),a.setVertexBuffer(1,h),a.draw(3,t,0,0),a.endPass(),i.defaultQueue.submit([e.finish()]),++_}));case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={vertex:"#version 450\nlayout(location = 0) in vec2 a_particlePos;\nlayout(location = 1) in vec2 a_particleVel;\nlayout(location = 2) in vec2 a_pos;\nvoid main() {\n  float angle = -atan(a_particleVel.x, a_particleVel.y);\n  vec2 pos = vec2(a_pos.x * cos(angle) - a_pos.y * sin(angle),\n          a_pos.x * sin(angle) + a_pos.y * cos(angle));\n  gl_Position = vec4(pos + a_particlePos, 0, 1);\n}",fragment:"#version 450\nlayout(location = 0) out vec4 fragColor;\nvoid main() {\n  fragColor = vec4(1.0);\n}",compute:function(e){return"#version 450\nstruct Particle {\n  vec2 pos;\n  vec2 vel;\n};\n\nlayout(std140, set = 0, binding = 0) uniform SimParams {\n  float deltaT;\n  float rule1Distance;\n  float rule2Distance;\n  float rule3Distance;\n  float rule1Scale;\n  float rule2Scale;\n  float rule3Scale;\n} params;\n\nlayout(std140, set = 0, binding = 1) buffer ParticlesA {\n  Particle particles[".concat(e," /* numParticles */];\n} particlesA;\n\nlayout(std140, set = 0, binding = 2) buffer ParticlesB {\n  Particle particles[").concat(e," /* numParticles */];\n} particlesB;\n\nvoid main() {\n  // https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n\n  uint index = gl_GlobalInvocationID.x;\n  if (index >= ").concat(e," /* numParticles */) { return; }\n\n  vec2 vPos = particlesA.particles[index].pos;\n  vec2 vVel = particlesA.particles[index].vel;\n\n  vec2 cMass = vec2(0.0, 0.0);\n  vec2 cVel = vec2(0.0, 0.0);\n  vec2 colVel = vec2(0.0, 0.0);\n  int cMassCount = 0;\n  int cVelCount = 0;\n\n  vec2 pos;\n  vec2 vel;\n  for (int i = 0; i < ").concat(e," /* numParticles */; ++i) {\n    if (i == index) { continue; }\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass += pos;\n      cMassCount++;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel -= (pos - vPos);\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel += vel;\n      cVelCount++;\n    }\n  }\n  if (cMassCount > 0) {\n    cMass = cMass / cMassCount - vPos;\n  }\n  if (cVelCount > 0) {\n    cVel = cVel / cVelCount;\n  }\n\n  vVel += cMass * params.rule1Scale + colVel * params.rule2Scale + cVel * params.rule3Scale;\n\n  // clamp velocity for a more pleasing simulation.\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n\n  // kinematic update\n  vPos += vVel * params.deltaT;\n\n  // Wrap around boundary\n  if (vPos.x < -1.0) vPos.x = 1.0;\n  if (vPos.x > 1.0) vPos.x = -1.0;\n  if (vPos.y < -1.0) vPos.y = 1.0;\n  if (vPos.y > 1.0) vPos.y = -1.0;\n\n  particlesB.particles[index].pos = vPos;\n\n  // Write back\n  particlesB.particles[index].vel = vVel;\n}")}},u={vertex:"\n[[location(0)]] var<in> a_particlePos : vec2<f32>;\n[[location(1)]] var<in> a_particleVel : vec2<f32>;\n[[location(2)]] var<in> a_pos : vec2<f32>;\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  var angle : f32 = -atan2(a_particleVel.x, a_particleVel.y);\n  var pos : vec2<f32> = vec2<f32>(\n      (a_pos.x * cos(angle)) - (a_pos.y * sin(angle)),\n      (a_pos.x * sin(angle)) + (a_pos.y * cos(angle)));\n  Position = vec4<f32>(pos + a_particlePos, 0.0, 1.0);\n  return;\n}\n",fragment:"\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  fragColor = vec4<f32>(1.0, 1.0, 1.0, 1.0);\n  return;\n}\n",compute:function(e){return"\n[[block]] struct Particle {\n  [[offset(0)]] pos : vec2<f32>;\n  [[offset(8)]] vel : vec2<f32>;\n};\n[[block]] struct SimParams {\n  [[offset(0)]] deltaT : f32;\n  [[offset(4)]] rule1Distance : f32;\n  [[offset(8)]] rule2Distance : f32;\n  [[offset(12)]] rule3Distance : f32;\n  [[offset(16)]] rule1Scale : f32;\n  [[offset(20)]] rule2Scale : f32;\n  [[offset(24)]] rule3Scale : f32;\n};\n[[block]] struct Particles {\n  [[offset(0)]] particles : [[stride(16)]] array<Particle, ".concat(e,">;\n};\n[[binding(0), set(0)]] var<uniform> params : SimParams;\n[[binding(1), set(0)]] var<storage_buffer> particlesA : Particles;\n[[binding(2), set(0)]] var<storage_buffer> particlesB : Particles;\n[[builtin(global_invocation_id)]] var<in> GlobalInvocationID : vec3<u32>;\n\n# https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n[[stage(compute)]]\nfn main() -> void {\n  var index : u32 = GlobalInvocationID.x;\n  if (index >= ").concat(e,") {\n    return;\n  }\n  var vPos : vec2<f32> = particlesA.particles[index].pos;\n  var vVel : vec2<f32> = particlesA.particles[index].vel;\n  var cMass : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var colVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cMassCount : u32 = 0u;\n  var cVelCount : u32 = 0u;\n  var pos : vec2<f32>;\n  var vel : vec2<f32>;\n\n  for (var i : u32 = 0u; i < ").concat(e,"u; i = i + 1u) {\n    if (i == index) {\n      continue;\n    }\n\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass = cMass + pos;\n      cMassCount = cMassCount + 1u;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel = colVel - (pos - vPos);\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel = cVel + vel;\n      cVelCount = cVelCount + 1u;\n    }\n  }\n  if (cMassCount > 0u) {\n    var temp : f32 = f32(cMassCount);\n    cMass = (cMass / vec2<f32>(temp, temp)) - vPos;\n    # cMass =\n    #   (cMass / vec2<f32>(f32(cMassCount), f32(cMassCount))) - vPos;\n  }\n  if (cVelCount > 0u) {\n    var temp : f32 = f32(cVelCount);\n    cVel = cVel / vec2<f32>(temp, temp);\n    # cVel = cVel / vec2<f32>(f32(cVelCount), f32(cVelCount));\n  }\n  vVel = vVel + (cMass * params.rule1Scale) + (colVel * params.rule2Scale) +\n      (cVel * params.rule3Scale);\n\n  # clamp velocity for a more pleasing simulation\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n  # kinematic update\n  vPos = vPos + (vVel * params.deltaT);\n  # Wrap around boundary\n  if (vPos.x < -1.0) {\n    vPos.x = 1.0;\n  }\n  if (vPos.x > 1.0) {\n    vPos.x = -1.0;\n  }\n  if (vPos.y < -1.0) {\n    vPos.y = 1.0;\n  }\n  if (vPos.y > 1.0) {\n    vPos.y = -1.0;\n  }\n  # Write back\n  particlesB.particles[index].pos = vPos;\n  particlesB.particles[index].vel = vVel;\n  return;\n}\n")}};n.default=Object(i.a)({name:"Compute Boids",description:"A GPU compute particle simulation that mimics                 the flocking behavior of birds. A compute shader updates                 two ping-pong buffers which store particle data. The data                 is used to draw instanced particles.",slug:"computeBoids",wgslShaders:u,glslShaders:l,init:function(e,n){return c.apply(this,arguments)},source:"import { makeBasicExample } from '../../components/basicExample';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const numParticles = 1500;\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const renderPipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n\n    vertexState: {\n      vertexBuffers: [\n        {\n          // instanced particles buffer\n          arrayStride: 4 * 4,\n          stepMode: 'instance',\n          attributes: [\n            {\n              // instance position\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float2',\n            },\n            {\n              // instance velocity\n              shaderLocation: 1,\n              offset: 2 * 4,\n              format: 'float2',\n            },\n          ],\n        },\n        {\n          // vertex buffer\n          arrayStride: 2 * 4,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 2,\n              offset: 0,\n              format: 'float2',\n            },\n          ],\n        },\n      ],\n    },\n\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const computePipeline = device.createComputePipeline({\n    computeStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.compute(numParticles),\n          })\n        : device.createShaderModule({\n            code: glslShaders.compute(numParticles),\n            transform: (glsl) => glslang.compileGLSL(glsl, 'compute'),\n          }),\n      entryPoint: 'main',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: { width: canvas.width, height: canvas.height, depth: 1 },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        attachment: undefined, // Assigned later\n        loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const vertexBufferData = new Float32Array([\n    -0.01,\n    -0.02,\n    0.01,\n    -0.02,\n    0.0,\n    0.02,\n  ]);\n  const verticesBuffer = device.createBuffer({\n    size: vertexBufferData.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(vertexBufferData);\n  verticesBuffer.unmap();\n\n  const simParamData = new Float32Array([\n    0.04, // deltaT;\n    0.1, // rule1Distance;\n    0.025, // rule2Distance;\n    0.025, // rule3Distance;\n    0.02, // rule1Scale;\n    0.05, // rule2Scale;\n    0.005, // rule3Scale;\n  ]);\n  const simParamBuffer = device.createBuffer({\n    size: simParamData.byteLength,\n    usage: GPUBufferUsage.UNIFORM,\n    mappedAtCreation: true,\n  });\n  new Float32Array(simParamBuffer.getMappedRange()).set(simParamData);\n  simParamBuffer.unmap();\n\n  const initialParticleData = new Float32Array(numParticles * 4);\n  for (let i = 0; i < numParticles; ++i) {\n    initialParticleData[4 * i + 0] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 1] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 2] = 2 * (Math.random() - 0.5) * 0.1;\n    initialParticleData[4 * i + 3] = 2 * (Math.random() - 0.5) * 0.1;\n  }\n\n  const particleBuffers: GPUBuffer[] = new Array(2);\n  const particleBindGroups: GPUBindGroup[] = new Array(2);\n  for (let i = 0; i < 2; ++i) {\n    particleBuffers[i] = device.createBuffer({\n      size: initialParticleData.byteLength,\n      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,\n      mappedAtCreation: true,\n    });\n    new Float32Array(particleBuffers[i].getMappedRange()).set(\n      initialParticleData\n    );\n    particleBuffers[i].unmap();\n  }\n\n  for (let i = 0; i < 2; ++i) {\n    particleBindGroups[i] = device.createBindGroup({\n      layout: computePipeline.getBindGroupLayout(0),\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: simParamBuffer,\n            offset: 0,\n            size: simParamData.byteLength,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: particleBuffers[i],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n        {\n          binding: 2,\n          resource: {\n            buffer: particleBuffers[(i + 1) % 2],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n      ],\n    });\n  }\n\n  let t = 0;\n  return function frame() {\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const passEncoder = commandEncoder.beginComputePass();\n      passEncoder.setPipeline(computePipeline);\n      passEncoder.setBindGroup(0, particleBindGroups[t % 2]);\n      passEncoder.dispatch(numParticles);\n      passEncoder.endPass();\n    }\n    {\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n      passEncoder.setPipeline(renderPipeline);\n      passEncoder.setVertexBuffer(0, particleBuffers[(t + 1) % 2]);\n      passEncoder.setVertexBuffer(1, verticesBuffer);\n      passEncoder.draw(3, numParticles, 0, 0);\n      passEncoder.endPass();\n    }\n    device.defaultQueue.submit([commandEncoder.finish()]);\n\n    ++t;\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(location = 0) in vec2 a_particlePos;\nlayout(location = 1) in vec2 a_particleVel;\nlayout(location = 2) in vec2 a_pos;\nvoid main() {\n  float angle = -atan(a_particleVel.x, a_particleVel.y);\n  vec2 pos = vec2(a_pos.x * cos(angle) - a_pos.y * sin(angle),\n          a_pos.x * sin(angle) + a_pos.y * cos(angle));\n  gl_Position = vec4(pos + a_particlePos, 0, 1);\n}`,\n\n  fragment: `#version 450\nlayout(location = 0) out vec4 fragColor;\nvoid main() {\n  fragColor = vec4(1.0);\n}`,\n\n  compute: (numParticles: number) => `#version 450\nstruct Particle {\n  vec2 pos;\n  vec2 vel;\n};\n\nlayout(std140, set = 0, binding = 0) uniform SimParams {\n  float deltaT;\n  float rule1Distance;\n  float rule2Distance;\n  float rule3Distance;\n  float rule1Scale;\n  float rule2Scale;\n  float rule3Scale;\n} params;\n\nlayout(std140, set = 0, binding = 1) buffer ParticlesA {\n  Particle particles[${numParticles} /* numParticles */];\n} particlesA;\n\nlayout(std140, set = 0, binding = 2) buffer ParticlesB {\n  Particle particles[${numParticles} /* numParticles */];\n} particlesB;\n\nvoid main() {\n  // https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n\n  uint index = gl_GlobalInvocationID.x;\n  if (index >= ${numParticles} /* numParticles */) { return; }\n\n  vec2 vPos = particlesA.particles[index].pos;\n  vec2 vVel = particlesA.particles[index].vel;\n\n  vec2 cMass = vec2(0.0, 0.0);\n  vec2 cVel = vec2(0.0, 0.0);\n  vec2 colVel = vec2(0.0, 0.0);\n  int cMassCount = 0;\n  int cVelCount = 0;\n\n  vec2 pos;\n  vec2 vel;\n  for (int i = 0; i < ${numParticles} /* numParticles */; ++i) {\n    if (i == index) { continue; }\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass += pos;\n      cMassCount++;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel -= (pos - vPos);\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel += vel;\n      cVelCount++;\n    }\n  }\n  if (cMassCount > 0) {\n    cMass = cMass / cMassCount - vPos;\n  }\n  if (cVelCount > 0) {\n    cVel = cVel / cVelCount;\n  }\n\n  vVel += cMass * params.rule1Scale + colVel * params.rule2Scale + cVel * params.rule3Scale;\n\n  // clamp velocity for a more pleasing simulation.\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n\n  // kinematic update\n  vPos += vVel * params.deltaT;\n\n  // Wrap around boundary\n  if (vPos.x < -1.0) vPos.x = 1.0;\n  if (vPos.x > 1.0) vPos.x = -1.0;\n  if (vPos.y < -1.0) vPos.y = 1.0;\n  if (vPos.y > 1.0) vPos.y = -1.0;\n\n  particlesB.particles[index].pos = vPos;\n\n  // Write back\n  particlesB.particles[index].vel = vVel;\n}`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[location(0)]] var<in> a_particlePos : vec2<f32>;\n[[location(1)]] var<in> a_particleVel : vec2<f32>;\n[[location(2)]] var<in> a_pos : vec2<f32>;\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  var angle : f32 = -atan2(a_particleVel.x, a_particleVel.y);\n  var pos : vec2<f32> = vec2<f32>(\n      (a_pos.x * cos(angle)) - (a_pos.y * sin(angle)),\n      (a_pos.x * sin(angle)) + (a_pos.y * cos(angle)));\n  Position = vec4<f32>(pos + a_particlePos, 0.0, 1.0);\n  return;\n}\n`,\n\n  fragment: `\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  fragColor = vec4<f32>(1.0, 1.0, 1.0, 1.0);\n  return;\n}\n`,\n\n  compute: (numParticles: number) => `\n[[block]] struct Particle {\n  [[offset(0)]] pos : vec2<f32>;\n  [[offset(8)]] vel : vec2<f32>;\n};\n[[block]] struct SimParams {\n  [[offset(0)]] deltaT : f32;\n  [[offset(4)]] rule1Distance : f32;\n  [[offset(8)]] rule2Distance : f32;\n  [[offset(12)]] rule3Distance : f32;\n  [[offset(16)]] rule1Scale : f32;\n  [[offset(20)]] rule2Scale : f32;\n  [[offset(24)]] rule3Scale : f32;\n};\n[[block]] struct Particles {\n  [[offset(0)]] particles : [[stride(16)]] array<Particle, ${numParticles}>;\n};\n[[binding(0), set(0)]] var<uniform> params : SimParams;\n[[binding(1), set(0)]] var<storage_buffer> particlesA : Particles;\n[[binding(2), set(0)]] var<storage_buffer> particlesB : Particles;\n[[builtin(global_invocation_id)]] var<in> GlobalInvocationID : vec3<u32>;\n\n# https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n[[stage(compute)]]\nfn main() -> void {\n  var index : u32 = GlobalInvocationID.x;\n  if (index >= ${numParticles}) {\n    return;\n  }\n  var vPos : vec2<f32> = particlesA.particles[index].pos;\n  var vVel : vec2<f32> = particlesA.particles[index].vel;\n  var cMass : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var colVel : vec2<f32> = vec2<f32>(0.0, 0.0);\n  var cMassCount : u32 = 0u;\n  var cVelCount : u32 = 0u;\n  var pos : vec2<f32>;\n  var vel : vec2<f32>;\n\n  for (var i : u32 = 0u; i < ${numParticles}u; i = i + 1u) {\n    if (i == index) {\n      continue;\n    }\n\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass = cMass + pos;\n      cMassCount = cMassCount + 1u;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel = colVel - (pos - vPos);\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel = cVel + vel;\n      cVelCount = cVelCount + 1u;\n    }\n  }\n  if (cMassCount > 0u) {\n    var temp : f32 = f32(cMassCount);\n    cMass = (cMass / vec2<f32>(temp, temp)) - vPos;\n    # cMass =\n    #   (cMass / vec2<f32>(f32(cMassCount), f32(cMassCount))) - vPos;\n  }\n  if (cVelCount > 0u) {\n    var temp : f32 = f32(cVelCount);\n    cVel = cVel / vec2<f32>(temp, temp);\n    # cVel = cVel / vec2<f32>(f32(cVelCount), f32(cVelCount));\n  }\n  vVel = vVel + (cMass * params.rule1Scale) + (colVel * params.rule2Scale) +\n      (cVel * params.rule3Scale);\n\n  # clamp velocity for a more pleasing simulation\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n  # kinematic update\n  vPos = vPos + (vVel * params.deltaT);\n  # Wrap around boundary\n  if (vPos.x < -1.0) {\n    vPos.x = 1.0;\n  }\n  if (vPos.x > 1.0) {\n    vPos.x = -1.0;\n  }\n  if (vPos.y < -1.0) {\n    vPos.y = 1.0;\n  }\n  if (vPos.y > 1.0) {\n    vPos.y = -1.0;\n  }\n  # Write back\n  particlesB.particles[index].pos = vPos;\n  particlesB.particles[index].vel = vVel;\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Compute Boids',\n  description:\n    'A GPU compute particle simulation that mimics \\\n                the flocking behavior of birds. A compute shader updates \\\n                two ping-pong buffers which store particle data. The data \\\n                is used to draw instanced particles.',\n  slug: 'computeBoids',\n  wgslShaders,\n  glslShaders,\n  init,\n  source: __SOURCE__,\n});\n"})}},[["5IKv",0,1,4,2,3]]]);