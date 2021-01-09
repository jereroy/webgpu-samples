_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{ZPo7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/twoCubes",function(){return t("lYvK")}])},lYvK:function(e,n,t){"use strict";t.r(n);var o=t("o0o1"),r=t.n(o),a=t("HaE+"),i=t("IOcx"),s=t("SoUo"),c=t("IPer"),u=t("PpzT");function l(){return(l=Object(a.a)(r.a.mark((function e(n,t){var o,a,s,l,m,p,g,v,h,x,w,b,M,P,S,y,C,V,B,T,G,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=function(){var e=Date.now()/1e3;i.a.rotate(T,S,1,i.b.fromValues(Math.sin(e),Math.cos(e),0)),i.a.rotate(G,y,1,i.b.fromValues(Math.cos(e),Math.sin(e),0)),i.a.multiply(C,B,T),i.a.multiply(C,m,C),i.a.multiply(V,B,G),i.a.multiply(V,m,V)},e.next=3,navigator.gpu.requestAdapter();case 3:return o=e.sent,e.next=6,o.requestDevice();case 6:return a=e.sent,e.next=9,Object(u.a)();case 9:return s=e.sent,l=Math.abs(n.width/n.height),m=i.a.create(),i.a.perspective(m,2*Math.PI/5,l,1,100),p=n.getContext("gpupresent"),g=p.configureSwapChain({device:a,format:"bgra8unorm"}),v=a.createBuffer({size:c.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(v.getMappedRange()).set(c.d),v.unmap(),h=a.createRenderPipeline({vertexStage:{module:t?a.createShaderModule({code:d.vertex}):a.createShaderModule({code:f.vertex,transform:function(e){return s.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:t?a.createShaderModule({code:d.fragment}):a.createShaderModule({code:f.fragment,transform:function(e){return s.compileGLSL(e,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:c.e,attributes:[{shaderLocation:0,offset:c.b,format:"float4"},{shaderLocation:1,offset:c.a,format:"float4"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),x=a.createTexture({size:{width:n.width,height:n.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),w={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:x.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},64,256,320,b=a.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),M=a.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b,offset:0,size:64}}]}),P=a.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b,offset:256,size:64}}]}),S=i.a.create(),i.a.translate(S,S,i.b.fromValues(-2,0,0)),y=i.a.create(),i.a.translate(y,y,i.b.fromValues(2,0,0)),C=i.a.create(),V=i.a.create(),B=i.a.create(),i.a.translate(B,B,i.b.fromValues(0,0,-7)),T=i.a.create(),G=i.a.create(),e.abrupt("return",(function(){E(),a.defaultQueue.writeBuffer(b,0,C.buffer,C.byteOffset,C.byteLength),a.defaultQueue.writeBuffer(b,256,V.buffer,V.byteOffset,V.byteLength),w.colorAttachments[0].attachment=g.getCurrentTexture().createView();var e=a.createCommandEncoder(),n=e.beginRenderPass(w);n.setPipeline(h),n.setVertexBuffer(0,v),n.setBindGroup(0,M),n.draw(36,1,0,0),n.setBindGroup(0,P),n.draw(36,1,0,0),n.endPass(),a.defaultQueue.submit([e.finish()])}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n}",fragment:"#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}"},d={vertex:"\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  return;\n}\n",fragment:"\n[[location(0)]] var<in> fragColor : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = fragColor;\n  return;\n}\n"};n.default=Object(s.a)({name:"Two Cubes",description:"This example shows some of the alignment requirements                 involved when updating and binding multiple slices of a                 uniform buffer.",slug:"twoCubes",init:function(e,n){return l.apply(this,arguments)},wgslShaders:d,glslShaders:f,source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeColorOffset,\n  cubePositionOffset,\n} from '../../cube';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    vertexState: {\n      vertexBuffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: cubeColorOffset,\n              format: 'float4',\n            },\n          ],\n        },\n      ],\n    },\n\n    rasterizationState: {\n      cullMode: 'back',\n    },\n\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n      depth: 1,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired in render loop.\n        attachment: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const matrixSize = 4 * 16; // 4x4 matrix\n  const offset = 256; // uniformBindGroup offset must be 256-byte aligned\n  const uniformBufferSize = offset + matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup1 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup2 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: offset,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const modelMatrix1 = mat4.create();\n  mat4.translate(modelMatrix1, modelMatrix1, vec3.fromValues(-2, 0, 0));\n  const modelMatrix2 = mat4.create();\n  mat4.translate(modelMatrix2, modelMatrix2, vec3.fromValues(2, 0, 0));\n  const modelViewProjectionMatrix1 = mat4.create() as Float32Array;\n  const modelViewProjectionMatrix2 = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -7));\n\n  const tmpMat41 = mat4.create();\n  const tmpMat42 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    mat4.rotate(\n      tmpMat41,\n      modelMatrix1,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n    mat4.rotate(\n      tmpMat42,\n      modelMatrix2,\n      1,\n      vec3.fromValues(Math.cos(now), Math.sin(now), 0)\n    );\n\n    mat4.multiply(modelViewProjectionMatrix1, viewMatrix, tmpMat41);\n    mat4.multiply(\n      modelViewProjectionMatrix1,\n      projectionMatrix,\n      modelViewProjectionMatrix1\n    );\n    mat4.multiply(modelViewProjectionMatrix2, viewMatrix, tmpMat42);\n    mat4.multiply(\n      modelViewProjectionMatrix2,\n      projectionMatrix,\n      modelViewProjectionMatrix2\n    );\n  }\n\n  return function frame() {\n    updateTransformationMatrix();\n\n    device.defaultQueue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix1.buffer,\n      modelViewProjectionMatrix1.byteOffset,\n      modelViewProjectionMatrix1.byteLength\n    );\n    device.defaultQueue.writeBuffer(\n      uniformBuffer,\n      offset,\n      modelViewProjectionMatrix2.buffer,\n      modelViewProjectionMatrix2.byteOffset,\n      modelViewProjectionMatrix2.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    passEncoder.setBindGroup(0, uniformBindGroup1);\n    passEncoder.draw(36, 1, 0, 0);\n\n    passEncoder.setBindGroup(0, uniformBindGroup2);\n    passEncoder.draw(36, 1, 0, 0);\n\n    passEncoder.endPass();\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n}`,\n\n  fragment: `#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  return;\n}\n`,\n  fragment: `\n[[location(0)]] var<in> fragColor : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = fragColor;\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Two Cubes',\n  description:\n    'This example shows some of the alignment requirements \\\n                involved when updating and binding multiple slices of a \\\n                uniform buffer.',\n  slug: 'twoCubes',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})}},[["ZPo7",0,1,4,2,3,5]]]);