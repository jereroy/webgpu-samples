_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{NbQA:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),i=t.n(r),a=t("HaE+"),o=t("SoUo"),u=t("PpzT"),c=256,s=[4,4];function l(){return(l=Object(a.a)(i.a.mark((function e(n,r,a){var o,l,m,p,f,g,h,b,x,v,y,B,w,P,G,S,U,D,T,I,_,M,L,C,E,z,F,V,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.gpu.requestAdapter();case 2:return o=e.sent,e.next=5,o.requestDevice();case 5:return l=e.sent,e.next=8,Object(u.a)();case 8:return m=e.sent,p=n.getContext("gpupresent"),f="bgra8unorm",g=new Float32Array([1,1,0,1,0,1,-1,0,1,1,-1,-1,0,0,1,1,1,0,1,0,-1,-1,0,0,1,-1,1,0,0,0]),h=l.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(h.getMappedRange()).set(g),h.unmap(),b=p.configureSwapChain({device:l,format:f}),x=l.createComputePipeline({computeStage:{module:l.createShaderModule({code:d.blur,transform:function(e){return m.compileGLSL(e,"compute")}}),entryPoint:"main"}}),v=l.createRenderPipeline({vertexStage:{module:l.createShaderModule({code:d.vertex,transform:function(e){return m.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:l.createShaderModule({code:d.fragment,transform:function(e){return m.compileGLSL(e,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",vertexState:{vertexBuffers:[{arrayStride:20,attributes:[{shaderLocation:0,offset:0,format:"float3"},{shaderLocation:1,offset:12,format:"float2"}]}]},colorStates:[{format:f}]}),y=l.createSampler({magFilter:"linear",minFilter:"linear"}),(B=document.createElement("img")).src=t("neuz"),e.next=23,B.decode();case 23:return e.next=25,createImageBitmap(B);case 25:return w=e.sent,P=[w.width,w.height],G=P[0],S=P[1],U=l.createTexture({size:[G,S,1],format:"rgba8unorm",usage:GPUTextureUsage.SAMPLED|GPUTextureUsage.COPY_DST}),l.defaultQueue.copyImageBitmapToTexture({imageBitmap:w},{texture:U},[w.width,w.height,1]),D=[0,1].map((function(){return l.createTexture({size:{width:G,height:S,depth:1},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE|GPUTextureUsage.SAMPLED})})),T=function(){var e=l.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=0,e.unmap(),e}(),I=function(){var e=l.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=1,e.unmap(),e}(),_=l.createBuffer({size:8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),M=l.createBindGroup({layout:x.getBindGroupLayout(0),entries:[{binding:0,resource:y},{binding:1,resource:{buffer:_}}]}),L=l.createBindGroup({layout:x.getBindGroupLayout(1),entries:[{binding:1,resource:U.createView()},{binding:2,resource:D[0].createView()},{binding:3,resource:{buffer:T}}]}),C=l.createBindGroup({layout:x.getBindGroupLayout(1),entries:[{binding:1,resource:D[0].createView()},{binding:2,resource:D[1].createView()},{binding:3,resource:{buffer:I}}]}),E=l.createBindGroup({layout:x.getBindGroupLayout(1),entries:[{binding:1,resource:D[1].createView()},{binding:2,resource:D[0].createView()},{binding:3,resource:{buffer:T}}]}),z=l.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:y},{binding:1,resource:D[1].createView()}]}),F={filterSize:15,iterations:2},k=function(){V=c-(F.filterSize-1),l.defaultQueue.writeBuffer(_,0,new Uint32Array([F.filterSize,V]))},a.add(F,"filterSize",1,33).step(2).onChange(k),a.add(F,"iterations",1,10).step(1),k(),e.abrupt("return",(function(){var e=l.createCommandEncoder(),n=e.beginComputePass();n.setPipeline(x),n.setBindGroup(0,M),n.setBindGroup(1,L),n.dispatch(Math.ceil(G/V),Math.ceil(S/s[1])),n.dispatch(2,Math.ceil(S/s[1])),n.setBindGroup(1,C),n.dispatch(Math.ceil(S/V),Math.ceil(G/s[1]));for(var t=0;t<F.iterations-1;++t)n.setBindGroup(1,E),n.dispatch(Math.ceil(G/V),Math.ceil(S/s[1])),n.setBindGroup(1,C),n.dispatch(Math.ceil(S/V),Math.ceil(G/s[1]));n.endPass();var r=e.beginRenderPass({colorAttachments:[{attachment:b.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]});r.setBindGroup(0,z),r.setPipeline(v),r.setVertexBuffer(0,h),r.setBindGroup(0,z),r.draw(6,1,0,0),r.endPass(),l.defaultQueue.submit([e.finish()])}));case 44:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={blur:"#version 450\n  layout(set = 0, binding = 0) uniform sampler samp;\n  layout(set = 0, binding = 1) uniform Params {\n    uint uFilterDim;\n    uint uBlockDim;\n  };\n  layout(set = 1, binding = 1) uniform texture2D inputTex;\n  layout(set = 1, binding = 2, rgba8) uniform writeonly image2D outputTex;\n  layout(set = 1, binding = 3) uniform Uniforms {\n    uint uFlip;\n  };\n\n  // This shader blurs the input texture in one diection, depending on whether\n  // |uFlip| is 0 or 1.\n  // It does so by running ".concat(c/s[0]," threads per workgroup to load ").concat(c,"\n  // texels into ").concat(s[1]," rows of shared memory. Each thread loads a\n  // ").concat(s[0]," x ").concat(s[1]," block of texels to take advantage of the texture sampling\n  // hardware.\n  // Then, each thread computes the blur result by averaging the adjacent texel values\n  // in shared memory.\n  // Because we're operating on a subset of the texture, we cannot compute all of the\n  // results since not all of the neighbors are available in shared memory.\n  // Specifically, with ").concat(c," x ").concat(c," tiles, we can only compute and write out\n  // square blocks of size ").concat(c," - (filterSize - 1). We compute the number of blocks\n  // needed and dispatch that amount.\n\n  shared vec3[").concat(c,"] tile[").concat(s[1],"];\n\n  layout(local_size_x = ").concat(c/s[0],", local_size_y = 1, local_size_z = 1) in;\n  void main() {\n    int filterOffset = int(uFilterDim - 1) / 2;\n    ivec2 dims = textureSize(sampler2D(inputTex, samp), 0);\n\n    ivec2 baseIndex = ivec2(\n      gl_WorkGroupID.xy * uvec2(uBlockDim, ").concat(s[1],") +\n      gl_LocalInvocationID.xy * uvec2(").concat(s[0],", 1)\n    ) - ivec2(filterOffset, 0);\n\n    for (uint r = 0; r < ").concat(s[1],"; ++r) {\n      for (uint c = 0; c < ").concat(s[0],"; ++c) {\n        ivec2 loadIndex = baseIndex + ivec2(c, r);\n        if (uFlip != 0) {\n          loadIndex = loadIndex.yx;\n        }\n\n        tile[r][").concat(s[0]," * gl_LocalInvocationID.x + c] =\n          texture(\n            sampler2D(inputTex, samp),\n            (vec2(loadIndex) + vec2(0.25)) / vec2(dims)).rgb;\n      }\n    }\n\n    barrier();\n\n    for (uint r = 0; r < ").concat(s[1],"; ++r) {\n      for (uint c = 0; c < ").concat(s[0],"; ++c) {\n        ivec2 writeIndex = baseIndex + ivec2(c, r);\n        if (uFlip != 0) {\n          writeIndex = writeIndex.yx;\n        }\n\n        uint center = ").concat(s[0]," * gl_LocalInvocationID.x + c;\n        if (center >= filterOffset &&\n            center < ").concat(c," - filterOffset &&\n            all(lessThan(writeIndex, dims))) {\n          vec3 acc = vec3(0.0);\n          for (uint f = 0; f < uFilterDim; ++f) {\n            uint i = center + f - filterOffset;\n            acc += (1.0 / float(uFilterDim)) * tile[r][i];\n          }\n          imageStore(outputTex, writeIndex, vec4(acc, 1.0));\n        }\n      }\n    }\n  }\n  "),vertex:"#version 450\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 0) uniform sampler mySampler;\nlayout(set = 0, binding = 1) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(myTexture, mySampler), fragUV);\n}\n"};n.default=Object(o.a)({name:"Image Blur",description:"This example shows how to blur an image using a WebGPU compute shader.",slug:"imageBlur",init:function(e,n,t){return l.apply(this,arguments)},glslShaders:d,source:"import type { GUI } from 'dat.gui';\nimport { makeBasicExample } from '../../components/basicExample';\nimport glslangModule from '../../glslang';\n\nconst tileDim = 256;\nconst batch = [4, 4];\n\nasync function init(canvas: HTMLCanvasElement, _useWGSL: boolean, gui?: GUI) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n  const context = canvas.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n\n  // prettier-ignore\n  const rectVerts = new Float32Array([\n    1.0,  1.0, 0.0, 1.0, 0.0,\n    1.0, -1.0, 0.0, 1.0, 1.0,\n    -1.0, -1.0, 0.0, 0.0, 1.0,\n    1.0,  1.0, 0.0, 1.0, 0.0,\n    -1.0, -1.0, 0.0, 0.0, 1.0,\n    -1.0,  1.0, 0.0, 0.0, 0.0,\n  ]);\n\n  const verticesBuffer = device.createBuffer({\n    size: rectVerts.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(rectVerts);\n  verticesBuffer.unmap();\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n  });\n\n  const blurPipeline = device.createComputePipeline({\n    computeStage: {\n      module: device.createShaderModule({\n        code: glslShaders.blur,\n        transform: (glsl) => glslang.compileGLSL(glsl, 'compute'),\n      }),\n      entryPoint: 'main',\n    },\n  });\n\n  const pipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: device.createShaderModule({\n        code: glslShaders.vertex,\n        transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n      }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: device.createShaderModule({\n        code: glslShaders.fragment,\n        transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n      }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n    vertexState: {\n      vertexBuffers: [\n        {\n          arrayStride: 20,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float3',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: 12,\n              format: 'float2',\n            },\n          ],\n        },\n      ],\n    },\n\n    colorStates: [\n      {\n        format: swapChainFormat,\n      },\n    ],\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const img = document.createElement('img');\n  img.src = require('../../../assets/img/Di-3d.png');\n  await img.decode();\n  const imageBitmap = await createImageBitmap(img);\n\n  const [srcWidth, srcHeight] = [imageBitmap.width, imageBitmap.height];\n  const cubeTexture = device.createTexture({\n    size: [srcWidth, srcHeight, 1],\n    format: 'rgba8unorm',\n    usage: GPUTextureUsage.SAMPLED | GPUTextureUsage.COPY_DST,\n  });\n  device.defaultQueue.copyImageBitmapToTexture(\n    { imageBitmap },\n    { texture: cubeTexture },\n    [imageBitmap.width, imageBitmap.height, 1]\n  );\n\n  const textures = [0, 1].map(() => {\n    return device.createTexture({\n      size: {\n        width: srcWidth,\n        height: srcHeight,\n        depth: 1,\n      },\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.STORAGE |\n        GPUTextureUsage.SAMPLED,\n    });\n  });\n\n  const buffer0 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 0;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const buffer1 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 1;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const blurParamsBuffer = device.createBuffer({\n    size: 8,\n    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,\n  });\n\n  const computeConstants = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: blurParamsBuffer,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup0 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: cubeTexture.createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup1 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer1,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup2 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n    ],\n  });\n\n  const settings = {\n    filterSize: 15,\n    iterations: 2,\n  };\n\n  let blockDim: number;\n  const updateSettings = () => {\n    blockDim = tileDim - (settings.filterSize - 1);\n    device.defaultQueue.writeBuffer(\n      blurParamsBuffer,\n      0,\n      new Uint32Array([settings.filterSize, blockDim])\n    );\n  };\n  gui.add(settings, 'filterSize', 1, 33).step(2).onChange(updateSettings);\n  gui.add(settings, 'iterations', 1, 10).step(1);\n\n  updateSettings();\n\n  return function frame() {\n    const commandEncoder = device.createCommandEncoder();\n\n    const computePass = commandEncoder.beginComputePass();\n    computePass.setPipeline(blurPipeline);\n    computePass.setBindGroup(0, computeConstants);\n\n    computePass.setBindGroup(1, computeBindGroup0);\n    computePass.dispatch(\n      Math.ceil(srcWidth / blockDim),\n      Math.ceil(srcHeight / batch[1])\n    );\n    computePass.dispatch(2, Math.ceil(srcHeight / batch[1]));\n\n    computePass.setBindGroup(1, computeBindGroup1);\n    computePass.dispatch(\n      Math.ceil(srcHeight / blockDim),\n      Math.ceil(srcWidth / batch[1])\n    );\n\n    for (let i = 0; i < settings.iterations - 1; ++i) {\n      computePass.setBindGroup(1, computeBindGroup2);\n      computePass.dispatch(\n        Math.ceil(srcWidth / blockDim),\n        Math.ceil(srcHeight / batch[1])\n      );\n\n      computePass.setBindGroup(1, computeBindGroup1);\n      computePass.dispatch(\n        Math.ceil(srcHeight / blockDim),\n        Math.ceil(srcWidth / batch[1])\n      );\n    }\n\n    computePass.endPass();\n\n    const passEncoder = commandEncoder.beginRenderPass({\n      colorAttachments: [\n        {\n          attachment: swapChain.getCurrentTexture().createView(),\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        },\n      ],\n    });\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(6, 1, 0, 0);\n    passEncoder.endPass();\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  // prettier-ignore\n  blur: `#version 450\n  layout(set = 0, binding = 0) uniform sampler samp;\n  layout(set = 0, binding = 1) uniform Params {\n    uint uFilterDim;\n    uint uBlockDim;\n  };\n  layout(set = 1, binding = 1) uniform texture2D inputTex;\n  layout(set = 1, binding = 2, rgba8) uniform writeonly image2D outputTex;\n  layout(set = 1, binding = 3) uniform Uniforms {\n    uint uFlip;\n  };\n\n  // This shader blurs the input texture in one diection, depending on whether\n  // |uFlip| is 0 or 1.\n  // It does so by running ${tileDim / batch[0]} threads per workgroup to load ${tileDim}\n  // texels into ${batch[1]} rows of shared memory. Each thread loads a\n  // ${batch[0]} x ${batch[1]} block of texels to take advantage of the texture sampling\n  // hardware.\n  // Then, each thread computes the blur result by averaging the adjacent texel values\n  // in shared memory.\n  // Because we're operating on a subset of the texture, we cannot compute all of the\n  // results since not all of the neighbors are available in shared memory.\n  // Specifically, with ${tileDim} x ${tileDim} tiles, we can only compute and write out\n  // square blocks of size ${tileDim} - (filterSize - 1). We compute the number of blocks\n  // needed and dispatch that amount.\n\n  shared vec3[${tileDim}] tile[${batch[1]}];\n\n  layout(local_size_x = ${tileDim / batch[0]}, local_size_y = 1, local_size_z = 1) in;\n  void main() {\n    int filterOffset = int(uFilterDim - 1) / 2;\n    ivec2 dims = textureSize(sampler2D(inputTex, samp), 0);\n\n    ivec2 baseIndex = ivec2(\n      gl_WorkGroupID.xy * uvec2(uBlockDim, ${batch[1]}) +\n      gl_LocalInvocationID.xy * uvec2(${batch[0]}, 1)\n    ) - ivec2(filterOffset, 0);\n\n    for (uint r = 0; r < ${batch[1]}; ++r) {\n      for (uint c = 0; c < ${batch[0]}; ++c) {\n        ivec2 loadIndex = baseIndex + ivec2(c, r);\n        if (uFlip != 0) {\n          loadIndex = loadIndex.yx;\n        }\n\n        tile[r][${batch[0]} * gl_LocalInvocationID.x + c] =\n          texture(\n            sampler2D(inputTex, samp),\n            (vec2(loadIndex) + vec2(0.25)) / vec2(dims)).rgb;\n      }\n    }\n\n    barrier();\n\n    for (uint r = 0; r < ${batch[1]}; ++r) {\n      for (uint c = 0; c < ${batch[0]}; ++c) {\n        ivec2 writeIndex = baseIndex + ivec2(c, r);\n        if (uFlip != 0) {\n          writeIndex = writeIndex.yx;\n        }\n\n        uint center = ${batch[0]} * gl_LocalInvocationID.x + c;\n        if (center >= filterOffset &&\n            center < ${tileDim} - filterOffset &&\n            all(lessThan(writeIndex, dims))) {\n          vec3 acc = vec3(0.0);\n          for (uint f = 0; f < uFilterDim; ++f) {\n            uint i = center + f - filterOffset;\n            acc += (1.0 / float(uFilterDim)) * tile[r][i];\n          }\n          imageStore(outputTex, writeIndex, vec4(acc, 1.0));\n        }\n      }\n    }\n  }\n  `,\n\n  vertex: `#version 450\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n`,\n\n  fragment: `#version 450\nlayout(set = 0, binding = 0) uniform sampler mySampler;\nlayout(set = 0, binding = 1) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(myTexture, mySampler), fragUV);\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Image Blur',\n  description:\n    'This example shows how to blur an image using a WebGPU compute shader.',\n  slug: 'imageBlur',\n  init,\n  glslShaders,\n  source: __SOURCE__,\n  gui: true,\n});\n",gui:!0})},neuz:function(e,n){e.exports="/webgpu-samples/_next/static/e04932ba9c013b60ddb249577c386914.png"},tGaW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/imageBlur",function(){return t("NbQA")}])}},[["tGaW",0,1,4,2,3]]]);